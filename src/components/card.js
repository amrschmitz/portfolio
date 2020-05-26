import React from "react"
import { Link } from "gatsby"

import logo from "../images/carla.svg"

const Card = ({ screenshot, screenshotAlt, logo, logoAlt, text1, text2, text3 }) => (
  <div className="card">
    <img src={screenshot} alt={screenshotAlt}/>
    <div className="content">
      <div className="top">
        <div className="line"></div>
        <img className="logo" src={logo} alt={logoAlt}/>
      </div>
      <h2>inCORPUS</h2>
      <p className="text">
        {text1}<br/>
        {text2}<br/>
        {text3}<br/>
      </p>
    </div>
  </div>
)

export default Card
