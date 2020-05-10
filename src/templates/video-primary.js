import React from 'react';
import { graphql } from "gatsby"
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';

import Layout from "../components/layout"
import PostPageTitle from "../components/postpage-title"
import PostPageRecirc from "../components/postpage-recirc"

const Template = ({ data }) => {
  
  const post = data.airtable.data;
  const processedCategory = post.Category.replace(/\s+/g, '-').toLowerCase()
  const processedAuthor = post.Authors.replace(/\s+/g, '-').toLowerCase()

  console.log('Welcome! Hope you enjoy reading "' + post.Title +'" by ' + post.Authors + '.');

  return (
    <Layout page={processedCategory}>

    <PostPageTitle
      link = {processedCategory}
      type={post.Category}
      title={post.Title}
      authorLink={processedAuthor}
      authors={post.Authors}
    />
      
    <div className="post-youtube-video">
      <iframe
        src={post.Featured_video}
        title="video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div
      className="video-post-blurb"
      dangerouslySetInnerHTML={{
        __html: unified()
          .use(markdown)
          .use(html)
          .processSync(post.Blurb)
      }}
    />

    <div
      className="video-post-body"
      dangerouslySetInnerHTML={{
        __html: unified()
          .use(markdown)
          .use(html)
          .processSync(post.Body)
      }}
    />

    {/* <PostPageRecirc
      prevStoryURL = '/'
      prevStory = 'prev story'
      nextStoryURL = '/'
      nextStory = 'next story'
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
        Publication_date
        Status
        Blurb
      }
    }
  }
`;

export default Template;