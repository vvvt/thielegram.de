import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Art: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Art" />
    <Link to="/">Go back to the homepage</Link>
    <h1>Art</h1>
    <h2>WSO Poster Series</h2>
  </Layout>
)

export default Art

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
