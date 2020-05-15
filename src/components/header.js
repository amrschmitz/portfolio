import { Link } from "gatsby"
import React from "react"

import logo from "../images/carla.svg"

const Header = () => (
  <header>
    <div className="line"></div>
    <Link to="/"><img className="logo" src={logo} alt="logo.svg"/></Link>
  </header>
)

export default Header
