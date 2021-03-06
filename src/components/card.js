import React from "react"
import SVG from 'react-inlinesvg'
import Fade from 'react-reveal/Fade'

const Card = ({ title, type = 'card left', link, screenshot, screenshotAlt, logo, text1, text2, text3, text4, text5 }) => (
  <div className={type}>
    <Fade duration={5000}>
      <a href={link} target="_blank" rel="noreferrer"><img src={screenshot} alt={screenshotAlt}/></a>
    </Fade>
    <div className="content">
      <div className="top">
        <div className="line"></div>
        <Fade duration={10000}>
          <SVG src={logo} className="logo" />
        </Fade>
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
