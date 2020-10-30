import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Index: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout color="#2D2D2D" home>
    <SEO title="Home" />
    <h1>Vincent Thiele</h1>
    <h2>Portfolio</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum impedit,
      fuga ullam amet, unde aliquid placeat hic fugiat quia voluptatibus dolor
      blanditiis facilis iste autem dolorem est iusto quo repellendus.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum impedit,
      fuga ullam amet, unde aliquid placeat hic fugiat quia voluptatibus dolor
      blanditiis facilis iste autem dolorem est iusto quo repellendus.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum impedit,
      fuga ullam amet, unde aliquid placeat hic fugiat quia voluptatibus dolor
      blanditiis facilis iste autem dolorem est iusto quo repellendus.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum impedit,
      fuga ullam amet, unde aliquid placeat hic fugiat quia voluptatibus dolor
      blanditiis facilis iste autem dolorem est iusto quo repellendus.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum impedit,
      fuga ullam amet, unde aliquid placeat hic fugiat quia voluptatibus dolor
      blanditiis facilis iste autem dolorem est iusto quo repellendus.
    </p>
  </Layout>
)

export default Index

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
