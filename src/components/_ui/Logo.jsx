import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Icon = () => (
  <svg
    width="71"
    height="31"
    viewBox="0 0 71 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M69.957 7.63636H67.1445V3.71591H61.2638V7.63636H59.1758V11.8977H61.2638V19.2912C61.2212 22.7216 63.3413 24.4581 67.4002 24.2344C68.7319 24.1598 69.7227 23.8828 70.2553 23.723L69.4031 19.5895C69.1793 19.6428 68.604 19.7599 68.2525 19.7599C67.4854 19.7599 67.1445 19.419 67.1445 18.7372V11.8977H69.957V7.63636Z"
      fill="#75A9FE"
    />
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
