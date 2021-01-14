// Libraries
import React from "react";
import SVG from "react-inlinesvg";
import Bounce from "react-reveal/Bounce";

// FontAwesome icons
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";

// Components
import Card from "../components/card";
import Layout from "../components/layout";
import SEO from "../components/seo";

// Images for the projects
import approximity from "../images/projects/approximity.jpg"
import approximityLogo from "../images/projects/approximity-logo.svg"
import aurei from "../images/projects/aurei.jpg"
import aureiLogo from "../images/projects/aurei-logo.svg"
import centaurusCommunications from "../images/projects/centaurus-communications.jpg"
import centaurusCommunicationsLogo from "../images/projects/centaurus-communications-logo.svg"
import cerbo from "../images/projects/cerbo.jpg"
import cerboLogo from "../images/projects/cerbo-logo.svg"
import fondationLCP from "../images/projects/fondationlcp.jpg"
import fondationLCPLogo from "../images/projects/fondationlcp-logo.svg"
import funkMyMood from "../images/projects/funk-my-mood.jpg"
import funkMyMoodLogo from "../images/projects/funk-my-mood-logo.svg"
import incorpus from "../images/projects/inCORPUS.jpg"
import incorpusLogo from "../images/projects/inCORPUS-logo.svg"
import leMargaux from "../images/projects/le-margaux.jpg"
import leMargauxLogo from "../images/projects/le-margaux-logo.svg"
import maisonCedric from "../images/projects/maison-cedric.jpg"
import maisonCedricLogo from "../images/projects/gatsby-logo.svg"
import marineDaoure from "../images/projects/marine-daoure.jpg"
import marineDaoureLogo from "../images/projects/marine-daoure-logo.svg"
import mavisTeo from "../images/projects/mavis-teo.jpg"
import mavisTeoLogo from "../images/projects/mavis-teo-logo.svg"
import rt2health from "../images/projects/rt2health.jpg"
import rt2healthLogo from "../images/projects/rt2health-logo.svg"

// Images for the stacks
import reactLogo from "../images/stacks/react-logo.svg"
import railsLogo from "../images/stacks/rails-logo.svg"
import netlifyLogo from "../images/stacks/netlify-logo.svg"
import herokuLogo from "../images/stacks/heroku-logo.svg"
import contentfulLogo from "../images/stacks/contentful-logo.svg"
import airtableLogo from "../images/stacks/airtable-logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />

    <h1>Hi, I'm Alexandre. I'm a full stack web developer and designer.</h1>
    <div className="row">
      <a href="mailto:amrschmitz@gmail.com" aria-label="Send email" target="_blank" rel="noreferrer">
        <FaEnvelope />
      </a>
      <a href="https://www.instagram.com/amrschmitz/" aria-label="Go to Instagram" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/amrschmitz/" aria-label="Go to LinkedIn" target="_blank" rel="noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/amrschmitz" aria-label="Go to GitHub" target="_blank" rel="noreferrer">
        <FaGithub />
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
      link="https://www.marinedaure.com/"
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
    <div className="row stacks">
      <Bounce left>
        <SVG src={reactLogo} alt="react-logo.svg" />
      </Bounce>
      <Bounce left>
        <SVG src={railsLogo} alt="rails-logo.svg" />
      </Bounce>
      <Bounce left>
        <SVG src={netlifyLogo} alt="netlify-logo.svg" />
      </Bounce>
      <Bounce left>
        <SVG src={herokuLogo} alt="heroku-logo.svg" />
      </Bounce>
      <Bounce left>
        <SVG src={contentfulLogo} alt="heroku-logo.svg" />
      </Bounce>
      <Bounce left>
        <SVG src={airtableLogo} alt="heroku-logo.svg" />
      </Bounce>
    </div>

    <h1>Contact me</h1>
    <form
      method="post"
      action="https://getform.io/f/683ad831-2c2b-420e-a962-cfa9477e3929"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <label htmlFor="name">Full Name</label>
      <input type="text" name="name" id="name"  />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email"  />
      <label htmlFor="subject">Subject</label>
      <input type="text" name="subject" id="subject"  />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="5"  />
      <div className="reset">
        <input type="reset" value="clear" role="button" />
      </div>
      <button type="submit"><FaPaperPlane /></button>
    </form>
  </Layout>
)

export default IndexPage
