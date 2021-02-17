import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"

const FooterContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 50px;
  }
`

const FooterAuthor = styled("a")`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;

  &:hover {
    color: ${colors.blue900};
  }
`

const Footer = () => (
  <FooterContainer>
    <Link to="/">
      <Logo />
    </Link>
    <FooterAuthor href="#">
      © {new Date().getFullYear()} Vincent Thiele
    </FooterAuthor>
    <FooterAuthor href="https://www.marguerite.io/?utm_source=prist&utm_medium=footer&utm_campaign=prist_starter">
      Design based on "Prist" by Marguerite Roth
    </FooterAuthor>
  </FooterContainer>
)

export default Footer
