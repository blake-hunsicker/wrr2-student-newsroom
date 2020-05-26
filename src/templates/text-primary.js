import React from 'react';
import { graphql } from "gatsby"
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';
// import images from 'remark-images';

import Layout from "../components/layout"
import SEO from '../components/seo'
import PostPageTitle from "../components/postpage-title"
import PostPageRecirc from "../components/postpage-recirc"

const Template = ({ data }) => {
  
  const post = data.airtable.data
  const processedCategory = post.Category.replace(/\s+/g, '-').toLowerCase()
  const processedAuthor = post.Authors.replace(/\s+/g, '-').toLowerCase()
      
  return (
    <Layout page={processedCategory}>

      <SEO
        title={`${post.Title} | Paused`}
        description={post.Blurb}
        image={post.Featured_image[0].url}
      />
            
      <PostPageTitle
        link={processedCategory}
        type={post.Category}
        title={post.Title}
        authorLink={processedAuthor}
        authors={post.Authors}
      />
      
      <div
        className="text-post-blurb"
        dangerouslySetInnerHTML={{
          __html: unified()
            .use(html)
            .use(markdown)
            .processSync(post.Blurb)
        }}
      />
      
      <div className="text-post-hero-image-wrapper">
        <img
          className="text-post-hero-image"
          src={post.Featured_image[0].url}
        />
        <div class="caption">
          {post.Featured_image_caption}
        </div>
      </div>
      
      <div
        className="text-post-body"
        dangerouslySetInnerHTML={{
          __html: unified()
            .use(html)
            .use(markdown)
            .processSync(post.Body)
        }}
      />
      
      {/* <PostPageRecirc
        prevStoryURL = '/'
        prevStory = 'Prev'
        nextStoryURL = '/'
        nextStory = 'Next'
      /> */}
      
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    airtable(data: {Slug: {eq: $slug}}) {
      data {
        Title
        Type
        Category
        Authors
        Slug
        Body
        Featured_video
        Featured_image {
          url
        }
        Featured_image_caption
        Publication_date
        Status
        Blurb
      }
    }
  }
`;

export default Template;