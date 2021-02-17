import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Icon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 1387 1387"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
  >
    <rect
      id="Favorit"
      x="-0"
      y="0"
      width="1386.02"
      height="1386.02"
      style={{ fill: "none" }}
    />
    <path d="M197.419,577.199c-9.849,-16.756 -9.971,-37.503 -0.318,-54.373c9.652,-16.87 27.599,-27.278 47.035,-27.278c97.698,-0 246.657,-0 326.008,-0c29.928,-0 54.19,24.261 54.19,54.19l-0,554.621c-0,24.448 -16.37,45.869 -39.961,52.288c-23.59,6.42 -48.558,-3.751 -60.947,-24.828c-100.362,-170.741 -250.02,-425.347 -326.007,-554.62Z" />
    <path d="M1188.61,309.121c9.849,-16.756 9.97,-37.503 0.318,-54.373c-9.652,-16.869 -27.6,-27.278 -47.036,-27.278c-97.697,-0 -246.656,-0 -326.007,-0c-29.928,-0 -54.19,24.262 -54.19,54.19l-0,554.621c-0,24.448 16.37,45.869 39.961,52.289c23.59,6.42 48.558,-3.752 60.947,-24.828c100.362,-170.741 250.02,-425.348 326.007,-554.621Z" />
  </svg>
)

const SRText = styled("span")`
  visibility: hidden;
`

const Logo = () => (
  <Link to="/">
    <Icon />
    <SRText>Home</SRText>
  </Link>
)

export default Logo
