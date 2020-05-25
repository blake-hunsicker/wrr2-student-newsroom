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
  
  // const categories = []

  // {otherCategories.nodes.map(({data}, index) => (
  //   categories.push(data.Slug)
  // ))}

  // console.log(categories)
  
  return (
    <Layout page={home.Slug}>

      <SEO
        title={`${home.Title} | Paused`}
        description={home.Blurb}
        image={home.Featured_image}
        keywords={home.Keywords}
      />
      
      <SecondaryPageTitle title={home.Title} />

      <h4 className="category-hero-mini-subhed">
        {home.Blurb}
      </h4>
      
      <div className='category-hero-image-wrapper'>
        <img
          className="category-hero-image"
          src={home.Featured_image}
        />
      </div>

      <div className="category-hero-links">
        <h4 className="category-hero-links-label">Stories</h4>
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
      
      {/* <CategoryPageRecirc /> */}
      
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