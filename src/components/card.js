import React from "react"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

const Card = ({ title, type, link, screenshot, screenshotAlt, logo, logoAlt, text1, text2, text3, text4, text5 }) => (
  <div className={type}>
    <a href={link} target="_blank" rel="noreferrer"><img src={screenshot} alt={screenshotAlt}/></a>
    <div className="content">
      <div className="top">
        <div className="line"></div>
        <Fade><img className="logo" src={logo} alt={logoAlt}/></Fade>
      </div>
      { type === 'card left' &&
        <Slide right>
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
        </Slide>
      }
      { type === 'card right' &&
        <Slide left>
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
        </Slide>
      }
    </div>
  </div>
)

export default Card
