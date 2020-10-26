import React from "react"
import SVG from 'react-inlinesvg'
import { Link } from "gatsby"

import logo from "../images/carla-black.svg"

const Header = () => (
  <header>
    <div className="line"></div>
    <Link to="/">
      <SVG src={logo} className="logo"/>
    </Link>
  </header>
)

export default Header
