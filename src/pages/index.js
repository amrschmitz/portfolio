import React from "react"

// FontAwesome icons
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

// Images
import incorpus from "../images/inCORPUS.jpg"
import incorpusLogo from "../images/inCORPUS-logo.svg"
import cerbo from "../images/cerbo.jpg"
import cerboLogo from "../images/cerbo-logo.svg"
import maisonCedric from "../images/maison-cedric.jpg"
import maisonCedricLogo from "../images/gatsby-logo.svg"
import approximity from "../images/approximity.jpg"
import approximityLogo from "../images/approximity-logo.svg"
import funkMyMood from "../images/funk-my-mood.jpg"
import funkMyMoodLogo from "../images/funk-my-mood-logo.svg"
import rt2health from "../images/rt2health.jpg"
import rt2healthLogo from "../images/rt2health-logo.png"
import leMargaux from "../images/le-margaux.jpg"
import leMargauxLogo from "../images/le-margaux-logo.svg"
import marineDaoure from "../images/marine-daoure.jpg"
import marineDaoureLogo from "../images/marine-daoure-logo.svg"
import mavisTeo from "../images/mavis-teo.jpg"
import mavisTeoLogo from "../images/mavis-teo-logo.png"
import fondationLCP from "../images/fondationlcp.jpg"
import fondationLCPLogo from "../images/fondationlcp-logo.png"
import aurei from "../images/aurei.jpg"
import aureiLogo from "../images/aurei-logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1 className="main">Hi, I'm Alexandre. I'm a frontend developer and UX/UI designer from France living in Montreal</h1>
    <div className="social-media">
      <a href="mailto:amrschmitz@gmail.com" aria-label="Send email" target="_blank" rel="noreferrer">
        <FaEnvelope/>
      </a>
      <a href="https://www.linkedin.com/in/amrschmitz/" aria-label="Go to LinkedIn" target="_blank" rel="noreferrer">
        <FaLinkedinIn/>
      </a>
      <a href="https://github.com/amrschmitz" aria-label="Go to GitHub" target="_blank" rel="noreferrer">
        <FaGithub/>
      </a>
    </div>
    <Card
      title="inCORPUS®"
      type="card left"
      link="https://www.in-corpus.com/"
      screenshot={incorpus}
      screenshotAlt="inCORPUS.jpg"
      logo={incorpusLogo}
      logoAlt="inCORPUS-logo.svg"
      text1="Stack: GatsbyJS (React) - JS, HTML & CSS"
      text2="APIs: ActiveCampaign, Intercom"
      text3="CMS: Contentful"
      text4="Languages: French & English"
    ></Card>
    <Card
      title="Cerbo, Inc."
      type="card right"
      link="https://cerbo.me/"
      screenshot={cerbo}
      screenshotAlt="cerbo.jpg"
      logo={cerboLogo}
      logoAlt="cerbo-logo.svg"
      text1="Stack: Flask - Python, JS (JQuery), HTML & CSS"
      text2="I cofounded this startup in EdTech"
      text3="Language: English"
    ></Card>
    <Card
      title="Maison Cédric"
      type="card left"
      link="https://maisoncedric.netlify.app/"
      screenshot={maisonCedric}
      screenshotAlt="maison-cedric.jpg"
      logo={maisonCedricLogo}
      logoAlt="gatsby-logo.svg"
      text1="Stack: GatsbyJS (React) - JS, HTML & CSS"
      text2="CMS: Airtable used as a database"
      text3="Languages: French & English"
    ></Card>
    <Card
      title="Approximity"
      type="card right"
      link="https://approximity.herokuapp.com/"
      screenshot={approximity}
      screenshotAlt="approximity.jpg"
      logo={approximityLogo}
      logoAlt="approximity-logo.svg"
      text1="Stack: Ruby on Rails - Ruby, JS, HTML & CSS"
      text2="APIs: Mapbox, Google Maps for the seed"
      text3="Language: English"
    ></Card>
    <Card
      title="Funk My Mood"
      type="card left"
      link="https://funk-my-mood.herokuapp.com/"
      screenshot={funkMyMood}
      screenshotAlt="funk-my-mood.jpg"
      logo={funkMyMoodLogo}
      logoAlt="funk-my-mood.svg"
      text1="Stack: Ruby on Rails - Ruby, JS, HTML & CSS"
      text2="APIs: Mapbox, Google Maps for the seed"
      text3="Language: English"
    ></Card>
    <Card
      title="Restaurant Le Margaux"
      type="card right"
      link="https://www.lemargaux.com/"
      screenshot={leMargaux}
      screenshotAlt="le-margaux.jpg"
      logo={leMargauxLogo}
      logoAlt="le-margaux-logo.svg"
      text1="Stack: Wix"
      text2="Language: French"
    ></Card>
    <Card
      title="Right2 Health Navigators, Inc."
      type="card left"
      link="https://www.rt2health.com/"
      screenshot={rt2health}
      screenshotAlt="rt2health.jpg"
      logo={rt2healthLogo}
      logoAlt="rt2health-logo.png"
      text1="Stack: Wix"
      text2="Language: English"
    ></Card>
    <Card
      title="Marine d'Aouré"
      type="card right"
      link="https://www.marinedaoure.com/"
      screenshot={marineDaoure}
      screenshotAlt="marine-daoure.jpg"
      logo={marineDaoureLogo}
      logoAlt="marine-daoure-logo.svg"
      text1="Stack: Wix"
      text2="Languages: English & French"
    ></Card>
    <Card
      title="Mavis Teo"
      type="card left"
      link="https://www.mavisteo.com/"
      screenshot={mavisTeo}
      screenshotAlt="mavis-teo.jpg"
      logo={mavisTeoLogo}
      logoAlt="mavis-teo-logo.png"
      text1="Stack: Wix"
      text2="Language: English"
    ></Card>
    <Card
      title="Aurei Crypto"
      type="card right"
      link="https://www.aurei-crypto.io/"
      screenshot={aurei}
      screenshotAlt="aurei.jpg"
      logo={aureiLogo}
      logoAlt="aurei-logo.svg"
      text1="Stack: Wix"
      text2="Language: English"
    ></Card>
    <Card
      title="Fondation pour les enfants Le Choix du Président"
      type="card left"
      link="https://www.fondationlcp.com/"
      screenshot={fondationLCP}
      screenshotAlt="fondationlcp.jpg"
      logo={fondationLCPLogo}
      logoAlt="fondationlcp-logo.png"
      text1="Stack: Wix"
      text2="Language: French & English"
    ></Card>
  </Layout>
)

export default IndexPage
