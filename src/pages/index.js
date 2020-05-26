import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

import incorpus from "../images/inCORPUS.jpg"
import incorpusLogo from "../images/inCORPUS-logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1 className="main">Hi, I'm Alex. I'm a UX/UI designer and front-end developer from France & living in Montreal</h1>
    <Card
      screenshot={incorpus}
      screenshotAlt='inCORPUS.jpg'
      logo={incorpusLogo}
      logoAlt='inCORPUS-logo.svg'
      left={true}
      text1='Stack: GatsbyJS (React)'
      text2='CMS: Contentful'
      text3='APIs: ActiveCampaign, Intercom'
    ></Card>
    <Card
      screenshot={incorpus}
      screenshotAlt='inCORPUS.jpg'
      logo={incorpusLogo}
      logoAlt='inCORPUS-logo.svg'
      left={true}
      text1='Stack: GatsbyJS (React)'
      text2='CMS: Contentful'
      text3='APIs: ActiveCampaign, Intercom'
    ></Card>
  </Layout>
)

export default IndexPage
