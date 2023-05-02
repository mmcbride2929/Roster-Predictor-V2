import { useAppDispatch } from '../../app/hooks'
import {
  addPlayer,
  removePlayer,
} from '../../features/application/rosterListSlice'
import closeIcon from '../../Assets/closeIcon.svg'
import addIcon from '../../Assets/addIcon.svg'
import './Player.scss'

interface Props {
  playerData: {
    _id: string
    name: string
    position: string
    age: number
    role: string
  }
  rosterPlayer: boolean
}

const Player = ({ playerData, rosterPlayer }: Props) => {
  const { name, position, age, _id } = playerData

  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (rosterPlayer) {
      dispatch(removePlayer(_id))
    }

    if (!rosterPlayer) {
      dispatch(addPlayer(_id))
    }
  }

  return (
    <div className="player-container">
      <div className="player-info-container">
        <h1 className="name">{name}</h1>
        <h1 className="position">
          {position === 'Special Teams' ? 'SPT' : position}
        </h1>
        <h1 className="age">{age}</h1>
      </div>

      <div className="button-container">
        <img src={!rosterPlayer ? addIcon : closeIcon} onClick={handleClick} />
      </div>
    </div>
  )
}
export default Player
