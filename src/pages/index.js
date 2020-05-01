import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageHero from "../components/homepage-hero"
import ArticlePromo from "../components/article-promo"


const IndexPage = ({ data }) => {

  const posts = data.allAirtable

  return (

    <Layout>

      <SEO title="Home" />
      
      <HomepageHero />
      
      <div className="article-promo">
        {posts.nodes.map(({data}, index) => (

          <ArticlePromo
            index={index}
            video={data.Featured_video}
            slug={data.Slug}
            title={data.Title}
            authors={data.Authors}
          />

        ))}
      </div>
      
    </Layout>

  )
}

export const pageQuery = graphql`
  query {
    allAirtable(
      filter: {data: {Status: {eq: "In Progress"}}},
      limit: 3
    ) {
      nodes {
        data {
          Title
          Authors
          Slug
          Body
          Featured_video
          Status
          Blurb
        }
      }
    }
  }
  fragment image on AirtableDataFeatured_image {
    thumbnails { full { url } }
  }
`;

export default IndexPage