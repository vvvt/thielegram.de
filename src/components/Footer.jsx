import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"

const FooterContainer = styled("footer")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 50px;
  }
`

const FooterLine = styled("span")`
  font-size: 0.75em;
  color: ${colors.grey750};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5em;
`
const FooterLink = styled("a")`
  text-decoration: none;
  color: ${colors.grey750};

  &:hover {
    color: ${colors.blue900};
  }
`

const Footer = () => (
  <FooterContainer>
    <Logo />
    <FooterLine>© {new Date().getFullYear()} Vincent Thiele</FooterLine>
    <FooterLine>
      <FooterLink href="https://www.marguerite.io/?utm_source=prist&utm_medium=footer&utm_campaign=prist_starter">
        Design based on "Prist" by Marguerite Roth
      </FooterLink>
    </FooterLine>
  </FooterContainer>
)

export default Footer
