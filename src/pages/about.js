import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SecondaryPageTitle from "../components/secondarypage-title"
import AboutPageSummary from "../components/aboutpage-summary"
import TeamGrid from "../components/team-grid"

const AboutPage = ({ data }) => {

  const posts = data.allAirtable

  return (

    <Layout page="about">

      <SEO title="About" />
      
      <SecondaryPageTitle title="About" />
      
      <AboutPageSummary />
      
      <TeamGrid />
            
    </Layout>

  )
}

export const pageQuery = graphql`
  query {
    allAirtable(filter: {data: {Status: {eq: "Live"}}}) {
      nodes {
        data {
          Authors
        }
      }
    }
  }
`;

export default AboutPage