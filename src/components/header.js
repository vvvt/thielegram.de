import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import home from "../images/icon-mail.svg"
import code from "../images/icon-mail.svg"
import art from "../images/icon-mail.svg"
import music from "../images/icon-mail.svg"

const Header = () => (
  <header>
    <nav aria-label="Main">
      <ul role="menubar">
        <li role="presentation">
          <Link to="/" role="menuitem" aria-label="Home" class="nav-item" activeClassName="nav-item nav-active">Thielegram</Link>
          <Link to="/" role="menuitem" aria-label="Home" activeClassName="nav-icon-active">
            <img class="nav-icon" alt="Home" src={home}/>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/code" role="menuitem" aria-label="Code" class="nav-item" activeClassName="nav-item nav-active">Code</Link>
          <Link to="/code" role="menuitem" aria-label="Code" activeClassName="nav-icon-active">
            <img class="nav-icon" alt="Code" src={code}/>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/music" role="menuitem" aria-label="Music" class="nav-item" activeClassName="nav-item nav-active">Music</Link>
          <Link to="/music" role="menuitem" aria-label="Music" activeClassName="nav-icon-active">
            <img class="nav-icon" alt="Music" src={music}/>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/art" role="menuitem" aria-label="Art" class="nav-item" activeClassName="nav-item nav-active">Art</Link>
          <Link to="/art" role="menuitem" aria-label="Art" activeClassName="nav-icon-active">
            <img class="nav-icon" alt="Art" src={art}/>
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
