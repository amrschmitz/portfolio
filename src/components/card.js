import React from "react"

const Card = ({ title, link, screenshot, screenshotAlt, logo, logoAlt, text1, text2, text3, text4 }) => (
  <div className="card">
    <a href={link} target="_blank" rel="noreferrer"><img src={screenshot} alt={screenshotAlt}/></a>
    <div className="content">
      <div className="top">
        <div className="line"></div>
        <img className="logo" src={logo} alt={logoAlt}/>
      </div>
      <h2>{title}</h2>
      <p className="text">
        {text1}<br/>
        {text2}<br/>
        {text3}<br/>
        {text4}<br/>
      </p>
    </div>
  </div>
)

export default Card
