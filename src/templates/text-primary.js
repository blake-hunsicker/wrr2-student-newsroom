import React from 'react';
import { graphql } from "gatsby"
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';

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
        image={post.Featured_image}
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
            .use(markdown)
            .use(html)
            .processSync(post.Blurb)
        }}
      />
      
      <img
        className="textPostHeroImage"
        src="https://cdn.glitch.com/5d4ad69e-6a76-4cac-af1a-39ec786a0062%2FLuke%20homepage.png?v=1587749513127"
      />
      
      <div
        className="text-post-body"
        dangerouslySetInnerHTML={{
          __html: unified()
            .use(markdown)
            .use(html)
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
        Featured_image
        Publication_date
        Status
        Blurb
      }
    }
  }
`;

export default Template;