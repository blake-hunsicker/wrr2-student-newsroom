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
        image={`https://dl.airtable.com/.attachments/c2fc5ca6bb69088ec7cdcb20b48c57a6/70506862/3.jpg`}
      />

      <Map {...config} />
      
    </Layout>
  )
}
   
export default MapPage;