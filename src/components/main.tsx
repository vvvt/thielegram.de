import React from "react"

const Main = ({ children }) => (
  <main
    style={{
      backgroundColor: "#2D2D2D",
      color: "white",
      width: "50%",
      padding: "3rem",
    }}
  >
    {children}
  </main>
)
export default Main
