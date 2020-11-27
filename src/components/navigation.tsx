import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import NavItem from "./navItem";
import Colors from "../classes/colors";

const Navigation = ({ home }) => (
  <nav
    style={{
      width: "50%",
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0,
    }}
  >
    <ul
      style={{
        listStyleType: "none",
      }}
    >
      <li>
        <NavItem to="/code" color={Colors.sectionColorA}>
          Code
        </NavItem>
      </li>
      <li>
        <NavItem to="/music" color={Colors.sectionColorB}>
          Music
        </NavItem>
      </li>
      <li>
        <NavItem to="/art" color={Colors.sectionColorC}>
          Art
        </NavItem>
      </li>
    </ul>
  </nav>
);

Navigation.propTypes = {
  home: PropTypes.bool,
};

export default Navigation;
