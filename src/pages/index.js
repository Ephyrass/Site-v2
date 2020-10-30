import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Home from "../components/home/Home"
import About from "../components/about/About"
import Contact from "../components/contact/Contact"
import Portfolio from "../components/portfolio/Portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
