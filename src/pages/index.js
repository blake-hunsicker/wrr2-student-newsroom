import React from "react"
import { Link, graphql } from "gatsby"
import { node } from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"


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
          <div className="story-promo-text">
            <Link to={data.Slug}>
              <h2>{data.Title}</h2>
              <h5>{data.Publication_date}</h5>
              <p>{data.Blurb_SEO_Description}</p>
            </Link>
          </div>
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
          Publication_date
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
