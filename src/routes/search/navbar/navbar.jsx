import { NavLink } from 'react-router-dom'

import './navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/player" className="link">
        Player
      </NavLink>
      <NavLink to="/matches" className="link">
        Matches
      </NavLink>
      <NavLink to="/maps" className="link">
        Maps
      </NavLink>
      {/* <Link to="/graph" className="link">
        Graph
      </Link> */}
    </div>
  )
}
