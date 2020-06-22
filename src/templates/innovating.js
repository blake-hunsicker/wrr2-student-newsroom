import React from 'react';
import { Link, graphql } from "gatsby"
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';

import Layout from "../components/layout"
import SEO from '../components/seo'
import SecondaryPageTitle from "../components/secondarypage-title"
import CategoryPageHero from "../components/categorypage-hero"
import CategoryPageArticlePromo from "../components/categorypage-article-promo"
import CategoryPageRecirc from "../components/categorypage-recirc"

const Template = ({ data }) => {
  const home = data.airtable.data
  const posts = data.categoryStories
  const otherCategories = data.categories
  
  return (
    <Layout page={home.Slug}>

      <SEO
        title={`${home.Title} | Paused`}
        description={home.Blurb}
        image={home.Featured_image[0].url}
        keywords={home.Keywords}
      />
      
      <SecondaryPageTitle title={home.Title} />

      <h4 className="category-hero-mini-subhed">
        {home.Blurb}
      </h4>
      
      <div className='category-hero-image-wrapper'>
        <img
          className="category-hero-image"
          src={home.Featured_image[0].url}
        />
      </div>

      <div className="category-hero-links">
        <h4 className="category-hero-links-label">Stories</h4>
        <Link to='/chinese-contact-tracing'>
          <h4>Chinese Contact Tracing</h4>
        </Link>
        {posts.nodes.map(({data}, index) => (
          <Link to={data.Slug}>
            <h4>{data.Title}</h4>
          </Link>
        ))}
      </div>
      
      <div
        className="category-hero-large-subhed"
        dangerouslySetInnerHTML={{
          __html: unified()
            .use(markdown)
            .use(html)
            .processSync(home.Body)
        }}
      />

      <p>test</p>

      <Link className="category-promo" to='/chinese-contact-tracing/'>
        <div className="category-promo-text left">
          <h2 className="category-promo-title">Chinese Contact Tracing</h2>
          <h4 className="category-promo-byline">Joanna Lin Su</h4>
          <div>
            In response to the lack of comprehensive coverage on non-western world's usages of the contact tracing apps systems, the story shows how China's massive surveillance with the QR health code system came into effect. It offers a chronologically ordered and geographically marked view to help readers understand the development of this system.
          </div>
        </div>
        <div className="category-promo-image-wrapper right">
          <img
            className="category-promo-image"
            src="https://dl.airtable.com/.attachments/c2fc5ca6bb69088ec7cdcb20b48c57a6/70506862/3.jpg"
          />
        </div>
      </Link>

      {posts.nodes.map(({data}, index) => (
        (index == 0 || index == 2) ?
          <Link className="category-promo" to={data.Slug}>
            <div className="category-promo-text left">
              <h2 className="category-promo-title">{data.Title}</h2>
              <h4 className="category-promo-byline">{data.Authors}</h4>
              <div
                className="category-promo-blurb"
                dangerouslySetInnerHTML={{
                  __html: unified()
                    .use(markdown)
                    .use(html)
                    .processSync(data.Blurb)
                }}
              />
            </div>
            <div className="category-promo-image-wrapper right">
              <img
                className="category-promo-image"
                src={data.Featured_image[0].url}
              />
            </div>
          </Link>
        :
        <Link className="category-promo" to={data.Slug}>
          <div className="category-promo-image-wrapper left">
            <img
              className="category-promo-image"
              src={data.Featured_image[0].url}
            />
          </div>
          <div className="category-promo-text right">
            <h2 className="category-promo-title">{data.Title}</h2>
            <h4 className="category-promo-byline">{data.Authors}</h4>
            <div
              className="category-promo-blurb"
              dangerouslySetInnerHTML={{
                __html: unified()
                  .use(markdown)
                  .use(html)
                  .processSync(data.Blurb)
              }}
            />
          </div>
        </Link>
    ))}
            
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
        Featured_image {
          url
        }
        Keywords
        Slug
      }
    }

    categoryStories: allAirtable(
      filter: {
        data: {
          Category: {
            eq: $category
          },
          Type: {
            ne: "Home"
          },
          Status: {
            eq: "Complete"
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
          Featured_image {
            url
          }
          Slug
        }
      }
    }

    categories: allAirtable(
      filter: {
        data: {
          Type: {
            eq: "Home"
          }
        }
      }
    ) {
      nodes {
        data {
          Slug
        }
      }
    }
  }
`;


export default Template;