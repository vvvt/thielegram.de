import React, { Component } from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const ButtonContainer = styled("button")`
  padding: 1em 2em;
  background: linear-gradient(
    135deg,
    ${colors.blue700} 0%,
    ${colors.blue800} 100%
  );
  font-weight: 600;
  color: white;
  outline: none;
  border: none;
  opacity: 1;
  font-size: 1rem;
  border-radius: 2px;
  position: relative;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: opacity 150ms ease-in-out;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 0.8em 1.8em;
    font-size: 1em;
  }

  p {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: opacity 150ms ease-in-out;
  }

  &.Button--secondary {
    background: ${colors.grey100};
    color: ${colors.blue700};
    padding: 0.95em 1.8em;
    opacity: 1;
    font-size: 0.95rem;
    transition: opacity 150ms ease-in-out;

    &:hover {
      opacity: 0.9;
      transition: opacity 150ms ease-in-out;
    }
  }
`

class Button extends Component {
  render() {
    const { children, ...props } = this.props
    return (
      <ButtonContainer onClick={this.props.onClick} {...props}>
        {this.props.children}
      </ButtonContainer>
    )
  }
}

export default Button
