import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { ArrowLeft } from 'react-feather'

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Code: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout color="#47F68D">
    <SEO title="Code" />
    <Link to="/">
      <ArrowLeft size="48" color="#2D2D2D"/>
    </Link>
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
