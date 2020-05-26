import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Alexandre Schmitz</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
