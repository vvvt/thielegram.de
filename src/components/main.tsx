import React from "react"
import PropTypes from "prop-types"

const Main = ({ children, color }) => (
  <main
    style={{
      backgroundColor: color,
      color: color == "#2D2D2D" ? "white" : "#2D2D2D",
      width: "50%",
      padding: "3rem",
    }}
  >
    {children}
  </main>
)

Main.propTypes = {
  color: PropTypes.string,
}

export default Main
