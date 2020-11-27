import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { ArrowLeft } from 'react-feather'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Colors from "../classes/colors"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Art: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout color={Colors.sectionColorC}>
    <SEO title="Art" />
    <Link to="/">
      <ArrowLeft size="48" />
    </Link>
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
