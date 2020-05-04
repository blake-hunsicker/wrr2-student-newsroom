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

      <h4 className="category-hero-mini-subhed">
        {home.Blurb}
      </h4>

      <div className="category-hero-links">
        <h4 className="category-hero-links-label">Stories</h4>
        {posts.nodes.map(({data}, index) => (
          <Link to={data.Slug}>
            <h4>{data.Title}</h4>
          </Link>
        ))}
      </div>

      {/* <h2 className="category-hero-large-subhed"> */}
        <div
          className="category-hero-large-subhed"
          dangerouslySetInnerHTML={{
            __html: unified()
              .use(markdown)
              .use(html)
              .processSync(home.Body)
          }}
        />
      {/* </h2> */}

      {/* <div className="top-line"></div> */}
      
      {posts.nodes.map(({data}, index) => (
        (index == 0 || index == 2) ?
          <Link className="category-promo" to={data.Slug}>
            <div className="category-promo-text left">
              <h2 className="category-promo-title">{data.Title}</h2>
              <h5 className="category-promo-byline">{data.Authors}</h5>
              <div
                className="category-promo-blurb"
                dangerouslySetInnerHTML={{
                  __html: unified()
                    .use(markdown)
                    .use(html)
                    .processSync(home.Blurb)
                }}
              />
            </div>
            <div className="category-promo-image-wrapper right">
              <img
                className="category-promo-image"
                src={data.Featured_image}
              />
            </div>
          </Link>
        :
        <Link className="category-promo" to={data.Slug}>
          <div className="category-promo-image-wrapper left">
            <img
              className="category-promo-image"
              src={data.Featured_image}
            />
          </div>
          <div className="category-promo-text right">
            <h2 className="category-promo-title">{data.Title}</h2>
            <h5 className="category-promo-byline">{data.Authors}</h5>
            <div
              className="category-promo-blurb"
              dangerouslySetInnerHTML={{
                __html: unified()
                  .use(markdown)
                  .use(html)
                  .processSync(home.Blurb)
              }}
            />
          </div>
        </Link>
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
          Featured_image
          Slug
        }
      }
    }
  }
`;


export default Template;