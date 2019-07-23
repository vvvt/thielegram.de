import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <nav aria-label="Main">
      <ul role="menubar">
        <li role="presentation">
          <Link to="/" role="menuitem" aria-label="Home" class="nav-item" activeClassName="nav-item nav-active">Thielegram</Link>
          </li>
        <li role="presentation">
          <Link to="/code" role="menuitem" aria-label="Code" class="nav-item" activeClassName="nav-item nav-active">Code</Link>
        </li>
        <li role="presentation">
          <Link to="/music" role="menuitem" aria-label="Music" class="nav-item" activeClassName="nav-item nav-active">Music</Link>
        </li>
        <li role="presentation">
          <Link to="/art" role="menuitem" aria-label="Art" class="nav-item" activeClassName="nav-item nav-active">Art</Link>
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
