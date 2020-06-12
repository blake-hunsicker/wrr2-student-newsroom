import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';
import scrollama from 'scrollama';
import Map from '../components/config-map'
import config from '../components/config'

import '../images/joanna/1.jpeg';
import codes from '../images/joanna/codes.jpg';
import '../images/joanna/legend1.jpg';


import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const MapPage = ({ data }) => {
  return (
    <Layout page='chinese-contact-tracing'>

      <SEO
        title={`Chinese Contacting Tracing | Paused`}
        description={`In response to the lack of comprehensive coverage on non-western world's usages of the contact tracing apps systems, the story shows how China's massive surveillance with the QR health code system came into effect. It offers a chronologically ordered and geographically marked view to help readers understand the development of this system.`}
        // image={post.Featured_image[0].url}
      />

      <div className='hero-text'>
        <h2>COVID-19 & China’s Mass Surveillance System</h2>
        <h3>How China’s contact tracing apps dramatically change how its citizens commute and travel</h3>
        <h4>In spring 2020, China created a massive surveillance system utilizing QR health codes to track and monitor how citizens travel and commute inside the country. Through examining web search data about the health code apps, reporting on user experiences, and detailing key events in the chronology of how the apps were rolled out, the following story depicts how China implemented one of the most extensive technological contract tracing systems in the world.</h4>
        <p>By <Link to="/joanna-lin-su">Joanna Lin Su</Link></p>
      </div>

      <Map {...config} />
      
    </Layout>
  )
}
   
export default MapPage;