/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Main from "./main"
import Navigation from "./navigation"

const Layout = ({ children, color, home }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh"
      }}>
        <Main color={color}>{children}</Main>
        <Navigation home={home}/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  home: PropTypes.bool,
}

export default Layout
