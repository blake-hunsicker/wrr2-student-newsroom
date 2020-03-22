import React from 'react';
import { graphql } from "gatsby"
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';

import Layout from "../components/layout"

const Template = ({ data }) => {
  const post = data.airtable.data
  return (
    <Layout>
      <div className="youtube-video">
        <iframe
          src={post.Featured_video}
          title="video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <article className="story-full">
        <h1>{post.Title}</h1>
        <h5>{post.Date}</h5>
        <h5>Written by {post.Author}</h5>
        <div
          dangerouslySetInnerHTML={{
            __html: unified()
              .use(markdown)
              .use(html)
              .processSync(post.Body)
          }}
        />
      </article>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    airtable(data: {Slug: {eq: $slug}}) {
      data {
        Title
        Slug
        Body
        Featured_video
        Date
        Status
        Blurb_SEO_Description
      }
    }
  }
`;

export default Template;