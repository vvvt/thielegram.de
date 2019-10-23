import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import code from "../images/icon-code.svg"
import art from "../images/icon-art.svg"
import music from "../images/icon-music.svg"
import home from "../images/icon-home.svg"

const Header = () => (
  <header>
    <Link to="/" aria-label="Home">
      <img alt="Home" src={home} />
    </Link>
    <nav aria-label="Main">
      <ul role="menubar">
        <li role="presentation">
          <Link to="/code/" role="menuitem" aria-label="Code" className="nav-item" activeClassName="nav-item nav-active">Code</Link>
          <Link to="/code/" role="menuitem" aria-label="Code" className="nav-icon" activeClassName="nav-icon-active">
            <img alt="Code" src={code}/>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/music/" role="menuitem" aria-label="Music" className="nav-item" activeClassName="nav-item nav-active">Music</Link>
          <Link to="/music/" role="menuitem" aria-label="Music" className="nav-icon" activeClassName="nav-icon-active">
            <img alt="Music" src={music}/>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/art/" role="menuitem" aria-label="Art" className="nav-item" activeClassName="nav-item nav-active">Art</Link>
          <Link to="/art/" role="menuitem" aria-label="Art" className="nav-icon" activeClassName="nav-icon-active">
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
