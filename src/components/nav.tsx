import React from "react"
import { Link } from "gatsby"
import NavItem from "./navItem"

const Navigation = () => (
  <nav
    style={{
      width: "50%",
      backgroundColor: "blue",
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0
    }}
  >
    <ul
      style={{
        listStyleType: "none",
      }}
    >
      <li>
        <NavItem to="/code/" color="#47F68D">
          Code
        </NavItem>
      </li>
      <li>
        <NavItem to="/music/" color="#FF8946">
          Music
        </NavItem>
      </li>
      <li>
        <NavItem to="/art/" color="#B57BFF">
          Art
        </NavItem>
      </li>
    </ul>
  </nav>
)

export default Navigation
