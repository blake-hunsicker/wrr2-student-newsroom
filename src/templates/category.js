import React from 'react';
import { Link, graphql } from "gatsby"
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';

import Layout from "../components/layout"
import SecondaryPageTitle from "../components/secondarypage-title"
import CategoryPageHero from "../components/categorypage-hero"
import CategoryPageArticlePromo from "../components/categorypage-article-promo"
import CategoryPageRecirc from "../components/categorypage-recirc"

const Template = ({ data }) => {
  const home = data.airtable.data
  const posts = data.allAirtable
  
  return (
    <Layout>
      
      <SecondaryPageTitle title={home.Title} />
      
      <img
        className="category-hero-image"
        src="https://cdn.glitch.com/5d4ad69e-6a76-4cac-af1a-39ec786a0062%2Fhawaii1.jpg?v=1587843662463"
      />

      <div className="category-hero-mini-subhed">
        {home.Blurb}
      </div>

      <div className="category-hero-links">
        <h4>Stories</h4>
        {posts.nodes.map(({data}, index) => (
          <Link to={data.Slug}>
            <p>{data.Title}</p>
          </Link>
        ))}
      </div>

      <h2 className="category-hero-large-subhed">
        <div
          className="textPostBlurb"
          dangerouslySetInnerHTML={{
            __html: unified()
              .use(markdown)
              .use(html)
              .processSync(home.Body)
          }}
        />
      </h2>

      <div className="top-line"></div>
      
      {posts.nodes.map(({data}, index) => (
        <div className="category-promo">
          <div className="category-promo-text">

            <h1 className="category-promo-title">{data.Title}</h1>

            <h2 className="categoryPromoByline">{data.Authors}</h2>

            <div className="category-promo-blurb">
              {data.Blurb}
            </div>
          </div>
          <div className="category-promo-image">
            <img
              src="https://cdn.glitch.com/5d4ad69e-6a76-4cac-af1a-39ec786a0062%2Fstory.jpg?v=1587850611344"
            />
          </div>
        </div>
      ))}
      
      <CategoryPageRecirc />
      
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!, $category: String!) {

    airtable(data: {Slug: {eq: $slug}}
    ) {
      data {
        Title
        Type
        Category
        Blurb
        Body
        Featured_video
        Slug
      }
    }

    allAirtable(
      filter: {
        data: {
          Category: {
            eq: $category
          },
          Type: {
            ne: "Home"
          }
        }
      }
    ) {
      nodes {
        data {
          Title
          Blurb
          Authors
          Type
          Category
          Slug
        }
      }
    }
  }

  fragment image on AirtableDataFeatured_image {
    thumbnails { full { url } }
  }
`;


export default Template;