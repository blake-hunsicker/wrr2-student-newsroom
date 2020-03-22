import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { node } from "prop-types"

const IndexPage = ({ data }) => {
  const posts = data.allAirtable
  return (
    <Layout>
      <SEO title="Home" />
      <section className="mast">
        <h1>Homepage</h1>
      </section>
      {posts.nodes.map(({data}, index) => (
        <article className="story-promo" key={index}>
          <div className="youtube-video">
            <iframe
              src={data.Featured_video}
              title={index}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Link to={data.Slug}>
            <h3>{data.Title}</h3>
            <h5>{data.Date}</h5>
            <p>{data.Blurb_SEO_Description}</p>
          </Link>
        </article>
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
          Date
          Status
          Blurb_SEO_Description
          Authors {
            name
            id
          }
        }
      }
    }
  }
  fragment image on AirtableDataFeatured_image {
    thumbnails { full { url } }
  }
`;

export default IndexPage
