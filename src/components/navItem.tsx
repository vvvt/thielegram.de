import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavItem = ({ to, color, children }) => (
  <Link
    to={to}
    style={{
      display: "flex",
      backgroundColor: color,
      width: "100%",
      height: "calc(100vh/3)",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Red Rose",
      fontSize: "8rem",
      textDecoration: "none",
      color: "#2d2d2d"
    }}
  >
    {children}
  </Link>
)

NavItem.propTypes = {
  to: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
}

export default NavItem