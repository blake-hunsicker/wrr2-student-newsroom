import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageHero from "../components/homepage-hero"
import ArticlePromo from "../components/article-promo"


const IndexPage = ({ data }) => {

  const posts = data.allStories
  const featuredPost = data.featuredStory

  return (

    <Layout page='light'>

      <SEO
        title='Paused'
        description='Stories about the global impacts of the COVID-19 pandemic, told by Journalism graduate students from the Studio 20 - Digital First program at the New York University. Stories about how people around the world are coping with the coronavirus situation, innovating and finding new ways of dealing with the stress, the anxiety and other hardships of these times.'
        image={featuredPost.data.Featured_image[0].url}
      />
      
      <HomepageHero
        featuredStoryImage={featuredPost.data.Featured_image[0].url}
        featuredStoryURL={featuredPost.data.Slug}
        featuredStoryByline={featuredPost.data.Authors}
        featuredStoryTitle={featuredPost.data.Title}
      />
      
      <div className="article-promo">
        {posts.nodes.map(({data}, index) => (

          <ArticlePromo
            index={index}
            image={data.Featured_image[0].url}
            slug={data.Slug}
            title={data.Title}
            // authors={data.Authors}
          />

        ))}
      </div>
      
    </Layout>

  )
}

export const pageQuery = graphql`
  query {
    allStories: allAirtable(
      filter: {
        data: {
          Status: {
            eq: "Complete"
          },
          Featured: {
            ne: true
          }
        }
      },
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
    featuredStory: airtable(data: {Featured: {eq: true}}) {
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

export default IndexPage