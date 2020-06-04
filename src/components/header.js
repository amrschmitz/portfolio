import { Link } from "gatsby"
import React from "react"

import logo from "../images/carla-black.svg"

const Header = () => (
  <header>
    <div className="line"></div>
    <Link to="/"><img className="logo" src={logo} alt="carla.svg"/></Link>
  </header>
)

export default Header
