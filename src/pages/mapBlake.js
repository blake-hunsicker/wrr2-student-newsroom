import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';
import scrollama from 'scrollama';
import Map from '../components/config-map'
import config from '../components/config'


import Layout from "../components/layout"
import SEO from "../components/seo"

const MapPage = ({ data }) => {
  const timelineItems = data.allAirtable;
  return (
    <Layout>

      <Map {...config} />
      
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allAirtable(
      filter: {data: {div_class: {eq: "Timeline"}}},
      sort: {fields: data___Date, order: ASC}
    ) {
      nodes {
        data {
          _p_
          Date(formatString: "MMMM Do")
        }
      }
    }
  }
`;
   
export default MapPage;