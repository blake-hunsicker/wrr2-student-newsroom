import React from "react"
import { graphql } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';

import Layout from "../components/layout"
import SEO from "../components/seo"
import ModalLayout from "../components/layout-for-modals"
import SecondaryPageTitle from "../components/secondarypage-title"
// import SEO from "../components/seo"


const Author = ({data}) => {
  const authors = data.author.data

  const socialCells = data.social.data

  const socialLinks = Object.entries(socialCells)

  console.log(socialLinks)
  
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <>
          {modal ? (
            <ModalLayout page='author'>

              <SEO
                title={`${authors.Name} | Paused`}
                description={authors.Bio}
                image={authors.Author_image[0].url}
              />

              <SecondaryPageTitle title={authors.Name} />
              
              <div className='author-page-image-wrapper'>
                <img
                  src={authors.Author_image[0].url}
                />
              </div>

              <div className="author-info">
                <h4 className='author-role'>
                  {authors.Roles}
                </h4>

                <div className='author-social'>
                  {socialLinks.map((data, index) => (
                    (data[1] != null) ?
                      <a
                        href={data[1]}
                        target='_blank'
                        className='social-pill'
                        key={index}
                      >
                        {data[0]}
                      </a>
                    :
                      null
                  ))}
                </div>

                <div
                  className='author-bio'
                  dangerouslySetInnerHTML={{
                    __html: unified()
                      .use(markdown)
                      .use(html)
                      .processSync(authors.Bio)
                  }}
                />
              </div>
      
            </ModalLayout>
          ) : (
            <Layout page='author'>
              
              <SEO
                title={`${authors.Name} | Paused`}
                description={authors.Bio}
                image={authors.Author_image[0].url}
              />

              <SecondaryPageTitle title={authors.Name} />

              <div className='author-page-image-wrapper'>
                <img
                  src={authors.Author_image[0].url}
                />
              </div>

              <div className="author-info">
                <h4 className='author-role'>
                  {authors.Roles}
                </h4>

                <div className='author-social'>
                  {socialLinks.map((data, index) => (
                    (data[1] != null) ?
                      <a
                        href={data[1]}
                        target='_blank'
                        className='social-pill'
                        key={index}
                      >
                        {data[0]}
                      </a>
                    :
                      null
                  ))}
                </div>

                <div
                  className='author-bio'
                  dangerouslySetInnerHTML={{
                    __html: unified()
                      .use(markdown)
                      .use(html)
                      .processSync(authors.Bio)
                  }}
                />
              </div>

            </Layout>
          )}
        </>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export const pageQuery = graphql`
  query($slug: String!){ 
    author: airtable(data: {Slug: {eq: $slug}}
    ) {
      data {
        Name
        Bio
        Author_image {
          url
        }
        Roles
        Slug
      }
    }
    social: airtable(data: {Slug: {eq: $slug}}
    ) {
      data {
        Twitter
        Instagram
        Facebook
        Website
      }
    }
  }
`;
   
export default Author;