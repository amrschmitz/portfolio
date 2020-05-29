import React from "react"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

const Card = ({ title, type, link, screenshot, screenshotAlt, logo, logoAlt, text1, text2, text3, text4, text5 }) => (
  <div className={type}>
    { type === 'card right' &&
      <Slide left>
        <a href={link} target="_blank" rel="noreferrer"><img src={screenshot} alt={screenshotAlt}/></a>
      </Slide>
    }
    { type === 'card left' &&
      <Slide right>
        <a href={link} target="_blank" rel="noreferrer"><img src={screenshot} alt={screenshotAlt}/></a>
      </Slide>
    }
    <div className="content">
      <div className="top">
        <div className="line"></div>
        <Fade><img className="logo" src={logo} alt={logoAlt}/></Fade>
      </div>
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
)

export default Card
