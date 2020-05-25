import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageHero from "../components/homepage-hero"
import ArticlePromo from "../components/article-promo"


const Erin2 = () => {

  return (

    <Layout>

      <SEO title="Erin2" />
      
      <div class="tabs">
        <Link to="erin1" className="erin-tab" activeClassName="active">Erin 1</Link>
        <Link to="erin2" className="erin-tab" activeClassName="active">Erin 2</Link>
      </div>

      <h1 className="Erin">Character 2</h1>
      
      
    </Layout>

  )
}

export const pageQuery = graphql`
  query {
    allStories: allAirtable(
      filter: {data: {Status: {eq: "In Progress"}}},
      limit: 3
    ) {
      nodes {
        data {
          Title
          Authors
          Slug
          Body
          Featured_image {
            url
          }
          Status
          Blurb
        }
      }
    }
    featuredStory: airtable(data: {Authors: {eq: "Felipe Léon"}}) {
      data {
        Title
        Authors
        Featured_image {
          url
        }
        Slug
      }
    }
  }
`;

export default Erin2