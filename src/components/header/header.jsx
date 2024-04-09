import './header.css'
import logo from '../../assets/faceit-seeklogo.svg'
import { Link, NavLink } from 'react-router-dom'

export default function header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <NavLink to="/faq">FAQ</NavLink>
    </header>
  )
}
