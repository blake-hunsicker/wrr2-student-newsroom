import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import Footer from "./footer"

import './css/clean.css';
import './css/style.css';

const Layout = ({ children, page }) => {
  return (
    <div className={page}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
