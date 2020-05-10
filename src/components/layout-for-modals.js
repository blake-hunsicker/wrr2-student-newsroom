import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import './css/clean.css';
import './css/style.css';
import './css/category.css';
import './css/homepage.css';
import './css/about.css';
import './css/article.css';
import './css/map.css';

const Layout = ({ children, page }) => {
  return (
    <div className={page}>
      <main className='modal'>
        {children}
        </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
