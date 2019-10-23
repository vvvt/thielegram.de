import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Code = () => (
  <Layout>
    <SEO title="Code" />
    <h1>Code</h1>
    <h2>Assignments</h2>
    <ul>
      <li><span className="portfolio-entry">SleepWell - visualizing sleep-data in a mobile context</span><span className="portfolio-year">2019</span></li>
      <li><span className="portfolio-entry">HyperFlatApp - communication app for METEC HyperFlat braille tablet</span><span className="portfolio-year">2018</span></li>
      <li><span className="portfolio-entry">Damaskus - digitally augmenting a museum visit</span><span className="portfolio-year">2018</span></li>
      <li><span className="portfolio-entry">Kah'rus Reise - develop an educational game</span><span className="portfolio-year">2017</span></li>
    </ul>

    <h2>Personal Projects</h2>
    <ul>
      <li><span className="portfolio-entry">WSO - redesign my orchestra's website</span><span className="portfolio-year">since 2019</span></li>
      <li><span className="portfolio-entry"><a href="https://werkstattorchester.de">werkstattorchester.de</a> - maintain my orchestra's website</span><span className="portfolio-year">since 2018</span></li>
      <li><span className="portfolio-entry">Shopö - Android app for automated shopping lists</span><span className="portfolio-year">on hold</span></li>
      <li><span className="portfolio-entry">loomorec - Android app implementing a voice-based user identification</span><span className="portfolio-year">2019</span></li>
      <li><span className="portfolio-entry">vvvt.github.io - custom new tab page</span><span className="portfolio-year">2017</span></li>
      <li><span className="portfolio-entry">Untitled - Text editor with custom shortcuts</span><span className="portfolio-year">2016</span></li>
    </ul>
  </Layout>
)

export default Code
