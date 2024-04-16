import { NavLink } from 'react-router-dom'

import './navbar.css'

export const Navbar = () => {
  return (
    <div className="matchRoom_navbar">
      <NavLink
        to="/matchRoom"
        className={({ isActive }) =>
          `matchRoom_link ${isActive ? 'matchRoom_link_active' : ''}`
        }
      >
        Room
      </NavLink>
      <NavLink
        to="/matchRoom/scoreboard"
        className={({ isActive }) =>
          `matchRoom_link ${isActive ? 'matchRoom_link_active' : ''}`
        }
      >
        Scoreboard
      </NavLink>
    </div>
  )
}
