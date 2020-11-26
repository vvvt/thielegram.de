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

const Music: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout color="#FF8946" home>
    <SEO title="Music" />
    <Link to="/">
      <ArrowLeft size="48" color="#2D2D2D"/>
    </Link>
    <h1>Music</h1>
    <h2></h2>
  </Layout>
)

export default Music

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
