import React from "react"
import { graphql } from "gatsby"
import { node } from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlePromo from "../components/article-promo"


const IndexPage = ({ data }) => {

  const posts = data.allAirtable

  return (

    <Layout>

      <SEO title="Home" />

      <section className="mast">
        <h1>Homepage</h1>
      </section>

      {posts.nodes.map(({data}, index) => (

        <ArticlePromo
          index={index}
          video={data.Featured_video}
          slug={data.Slug}
          title={data.Title}
          publication_date={data.publication_date}
          blurb={data.Blurb_SEO_Description}
        />
        
      ))}
      
    </Layout>

  )
}

export const pageQuery = graphql`
  query {
    allAirtable(filter: {data: {Status: {eq: "Live"}}}) {
      nodes {
        data {
          Title
          Slug
          Body
          Featured_video
          Publication_date
          Status
          Blurb_SEO_Description
        }
      }
    }
  }
  fragment image on AirtableDataFeatured_image {
    thumbnails { full { url } }
  }
`;

export default IndexPage
