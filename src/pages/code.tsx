import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Code: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Code" />
    <Link to="/">Go back to the homepage</Link>
    <h1>Code</h1>
    <h2>GraphTiles</h2>
    <p></p>
    <h2>foodi</h2>
    <p></p>
    <h2>SleepWell</h2>
    <p></p>
    <h2>loomorec</h2>
    <p></p>
  </Layout>
)

export default Code

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
