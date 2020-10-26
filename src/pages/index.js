// Libraries
import React from "react"

// FontAwesome icons
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaGithub, FaPaperPlane } from 'react-icons/fa';

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

// Images for the projects
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
import mavisTeoLogo from "../images/mavis-teo-logo.svg"
import fondationLCP from "../images/fondationlcp.jpg"
import fondationLCPLogo from "../images/fondationlcp-logo.png"
import aurei from "../images/aurei.jpg"
import aureiLogo from "../images/aurei-logo.svg"
import centaurusCommunications from "../images/centaurus-communications.jpg"
import centaurusCommunicationsLogo from "../images/centaurus-communications-logo.svg"

// Images for the stacks
import reactLogo from "../images/react-logo.svg"
import railsLogo from "../images/rails-logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />

    <h1>Hi, I'm Alexandre. I'm a full stack web developer and designer</h1>
    <div className="row">
      <a href="mailto:amrschmitz@gmail.com" aria-label="Send email" target="_blank" rel="noreferrer">
        <FaEnvelope/>
      </a>
      <a href="https://www.instagram.com/amrschmitz/" aria-label="Go to Instagram" target="_blank" rel="noreferrer">
        <FaInstagram/>
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
      text1="Stack: Wix"
      text2="Language: English"
    ></Card>
    <Card
      title="Centaurus Communications"
      type="card right"
      link="https://www.centaurusasia.com/"
      screenshot={centaurusCommunications}
      screenshotAlt="centaurus-communications.jpg"
      logo={centaurusCommunicationsLogo}
      text1="Stack: Wix"
      text2="Language: English"
    ></Card>
    <Card
      title="Aurei Crypto"
      type="card left"
      link="https://www.aurei-crypto.io/"
      screenshot={aurei}
      screenshotAlt="aurei.jpg"
      logo={aureiLogo}
      text1="Stack: Wix"
      text2="Language: English"
    ></Card>
    <Card
      title="Fondation pour les enfants Le Choix du Président"
      type="card right"
      link="https://www.fondationlcp.com/"
      screenshot={fondationLCP}
      screenshotAlt="fondationlcp.jpg"
      logo={fondationLCPLogo}
      text1="Stack: Wix"
      text2="Language: French & English"
    ></Card>

    <h1>My stacks:</h1>
    <div className="row">
      <img src={reactLogo} alt="react-logo.svg"/>
      <img src={railsLogo} alt="rails-logo.svg"/>
    </div>

    <h1>Contact me</h1>
    <form
      method="post"
      action="https://getform.io/f/683ad831-2c2b-420e-a962-cfa9477e3929"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <label htmlFor="name">Full Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="subject">Subject</label>
      <input type="text" name="subject" id="subject" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="5" />
      <div className="reset">
        <input type="reset" value="clear" role="button"/>
      </div>
      <button type="submit"><FaPaperPlane/></button>
    </form>
  </Layout>
)

export default IndexPage
