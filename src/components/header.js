import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import code from "../images/icon-code.svg"
import art from "../images/icon-art.svg"
import music from "../images/icon-music.svg"
import home from "../images/icon-home.svg"

const Header = () => (
  <header>
    <img src={home}></img>
    <nav aria-label="Main">
      <ul role="menubar">
        <li role="presentation">
          <Link to="/code/" role="menuitem" aria-label="Code" class="nav-item" activeClassName="nav-item nav-active">Code</Link>
          <Link to="/code/" role="menuitem" aria-label="Code" class="nav-icon" activeClassName="nav-icon-active">
            <img alt="Code" src={code}/>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/music/" role="menuitem" aria-label="Music" class="nav-item" activeClassName="nav-item nav-active">Music</Link>
          <Link to="/music/" role="menuitem" aria-label="Music" class="nav-icon" activeClassName="nav-icon-active">
            <img alt="Music" src={music}/>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/art/" role="menuitem" aria-label="Art" class="nav-item" activeClassName="nav-item nav-active">Art</Link>
          <Link to="/art/" role="menuitem" aria-label="Art" class="nav-icon" activeClassName="nav-icon-active">
            <img alt="Art" src={art}/>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
