import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

let getAge = function(DOB) {
  var today = new Date();
  var birthDate = new Date(DOB);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
  }

  return age;
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article>
      <h1>Hey there!</h1>
      <p>My name is Vincent, I'm {getAge("10/21/1996")} years old and study Media Computer Science at the <span lang="de">Technische Universität Dresden</span>. This page is mainly supposed to act as a portfolio for my hobbies: Coding, Music and Art. Check out the other sections for more details.</p>
    </article>
  </Layout>
)

export default IndexPage
