import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import Footer from "./footer"

import './css/clean.css';
import './css/style.css';
import './css/category.css';
import './css/homepage.css';
import './css/about.css';
import './css/article.css';
import './css/map.css';
import './css/erin.css';

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
