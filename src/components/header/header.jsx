import { Link, NavLink } from 'react-router-dom'

import './header.css'
import logo from '/assets/faceit-seeklogo.svg'

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <NavLink to="/faq">FAQ</NavLink>
    </header>
  )
}
