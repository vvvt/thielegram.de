import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Music = () => (
  <Layout>
    <SEO title="Music" />
    <h1>Music</h1>
    <p>While training in the field of computer science, I remained a musician at heart, enjoying the virtues of playing solo
        and ensemble for almost 20 years. While the bassoon has been my main instrument for the past 14 years, I picked up
    playing the guitar as a passion project about 6 years ago.</p>

    <h2>Instruments</h2>
    <ul>
      <li><span className="portfolio-entry">Bassoon</span><span className="portfolio-year">since 2005</span></li>
      <li><span className="portfolio-entry">Guitar</span><span className="portfolio-year">since 2012</span></li>
      <li><span className="portfolio-entry">Ukulele</span><span className="portfolio-year">since 2019</span></li>
      <li><span className="portfolio-entry">Bass Guitar</span><span className="portfolio-year"> since 2015</span></li>
      <li><span className="portfolio-entry">Mandolin</span><span className="portfolio-year">since 2015</span></li>
      <li><span className="portfolio-entry">Alto Recorder</span><span className="portfolio-year"> 2004 - 2009</span></li>
      <li><span className="portfolio-entry">Sopranino Recorder</span><span className="portfolio-year"> 2004 - 2009</span></li>
      <li><span className="portfolio-entry">Tenoroon</span><span className="portfolio-year">2003 - 2006</span></li>
      <li><span className="portfolio-entry">Recorder</span><span className="portfolio-year">2002 - 2009</span></li>
    </ul>

    <h2>Compositions</h2>
    <ul>
      <li><span className="portfolio-entry">War</span><span className="portfolio-year">2015</span></li>
      <li><span className="portfolio-entry">Cet</span><span className="portfolio-year">2015</span></li>
      <li><span className="portfolio-entry">Neu_Epic_Multi</span><span className="portfolio-year">2014</span></li>
    </ul>

    <h2>Accolades</h2>
    <ul>
      <li><span className="portfolio-entry">Jugend Musiziert 2nd prize (Bassoon solo)</span><span className="portfolio-year">2013</span></li>
      <li><span className="portfolio-entry">Jugend Musiziert 1st prize (Bassoon ensemble)</span><span className="portfolio-year">2008</span></li>
      <li><span className="portfolio-entry">Jugend Musiziert 2nd prize (Bassoon ensemble)</span><span className="portfolio-year">2008</span></li>
      <li><span className="portfolio-entry">Jugend Musiziert 2nd prize (Tenoroon solo)</span><span className="portfolio-year">2006</span></li>
      <li><span className="portfolio-entry">Jugend Musiziert 2nd prize (Recorder solo)</span><span className="portfolio-year">2006</span></li>
    </ul>
  </Layout>
)

export default Music
