import React from "react"
import PropTypes from "prop-types"
import Colors from "../classes/colors"

const Main = ({ children, color }) => (
  <main
    style={{
      backgroundColor: color,
      color: color == Colors.dark ? Colors.light : Colors.dark,
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
