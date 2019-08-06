import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article>
      <h1>Hey there!</h1>
      <p>My name is Vincent, I'm {Math.abs(new Date(Date.now() - new Date(1996,10,21).getTime()).getUTCFullYear() - 1970)} years old and study Media Computer Science at the <span lang="de">Technische Universität Dresden</span>. This page is mainly supposed to act as a portfolio for my hobbies: Coding, Music and Art. Check the other tabs for more details.</p>
    </article>
  </Layout>
)

export default IndexPage
