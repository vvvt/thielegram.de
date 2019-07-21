import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <li><Link to="/" class="nav-item" activeClassName="nav-item nav-active">Thielegram</Link></li>
        <li><Link to="/code" class="nav-item" activeClassName="nav-item nav-active">Code</Link></li>
        <li><Link to="/music" class="nav-item" activeClassName="nav-item nav-active">Music</Link></li>
        <li><Link to="/art" class="nav-item" activeClassName="nav-item nav-active">Art</Link></li>
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
