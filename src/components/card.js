import React from "react"
import Fade from 'react-reveal/Fade'

const Card = ({ title, type = 'card left', link, screenshot, screenshotAlt, logo, logoAlt, text1, text2, text3, text4, text5 }) => (
  <div className={type}>
    <a href={link} target="_blank" rel="noreferrer"><img src={screenshot} alt={screenshotAlt}/></a>
    <div className="content">
      <div className="top">
        <div className="line"></div>
        <Fade duration={8000}><img className="logo" src={logo} alt={logoAlt}/></Fade>
      </div>
        <div>
          <a href={link} target="_blank" rel="noreferrer"><h2>{title}</h2></a>
          { text1 &&
            <p>{text1}</p>
          }
          { text2 &&
            <p>{text2}</p>
          }
          { text3 &&
            <p>{text3}</p>
          }
          { text4 &&
            <p>{text4}</p>
          }
          { text5 &&
            <p>{text5}</p>
          }
        </div>
    </div>
  </div>
)

export default Card
