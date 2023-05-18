import { Link } from 'react-router-dom'
import './Nav.scss'
import logo from '../../Assets/FINAL53.png'
import nflLogo from '../../Assets/nflIcon.png'

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img className="logo" src={logo} alt="app-logo" />
      </Link>
      <img className="nfl-logo" src={nflLogo} alt="nfl-logo" />
    </nav>
  )
}
export default Nav
