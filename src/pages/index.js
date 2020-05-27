import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

import incorpus from "../images/inCORPUS.jpg"
import incorpusLogo from "../images/inCORPUS-logo.svg"
import maisonCedric from "../images/maison-cedric.jpg"
import maisonCedricLogo from "../images/gatsby-logo.svg"
import approximity from "../images/approximity.jpg"
import approximityLogo from "../images/approximity-logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1 className="main">Hi, I'm Alex. I'm a frontend developper and UX/UI designer from France living in Montreal</h1>
    <Card
      title="inCORPUS®"
      link="https://www.in-corpus.com/"
      screenshot={incorpus}
      screenshotAlt="inCORPUS.jpg"
      logo={incorpusLogo}
      logoAlt="inCORPUS-logo.svg"
      text1="Stack: GatsbyJS (React) - JS, HTML & CSS"
      text2="Languages: French & English"
      text3="CMS: Contentful"
      text4="APIs: ActiveCampaign, Intercom"
    ></Card>
    <Card
      title="Maison Cédric"
      link="https://maisoncedric.netlify.app/"
      screenshot={maisonCedric}
      screenshotAlt="maison-cedric.jpg"
      logo={maisonCedricLogo}
      logoAlt="gatsby-logo.svg"
      text1="Stack: GatsbyJS (React) - JS, HTML & CSS"
      text2="Languages: French & English"
      text3="CMS: Airtable"
    ></Card>
    <Card
      title="Approximity"
      link="https://approximity.herokuapp.com/"
      screenshot={approximity}
      screenshotAlt="approximity.jpg"
      logo={approximityLogo}
      logoAlt="approximity-logo.svg"
      text1="Stack: Ruby on Rails - Ruby, JS, HTML & CSS"
      text2="APIs: Mapbox, Google Maps for the seed"
    ></Card>
  </Layout>
)

export default IndexPage
