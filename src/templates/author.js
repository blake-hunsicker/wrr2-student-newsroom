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
  const social = data.social.data

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <>
          {modal ? (
            <ModalLayout page='author'>
              <SEO title={authors.Name} />

              <SecondaryPageTitle title={authors.Name} />
              
              <div className='author-page-image-wrapper'>
                <img
                  src={authors.Author_image[0].url}
                />
              </div>

              <h5 className='author-role'>
                {authors.Roles}
              </h5>

              {/* {social.map(({data}, index) => (
                ({data} === null) ?
                  <a
                    href='https://amazon.com'
                    target='_blank'
                    className='social-pill'
                  >
                    got one
                  </a>
                :
                  null
              ))} */}

              {/* <div className='social'>
                <a
                  href={authors.Twitter}
                  target='_blank'
                  className='social-pill'
                >
                  Twitter
                </a>
                <a
                  href={authors.LinkedIn}
                  target='_blank'
                  className='social-pill'
                >
                  LinkedIn
                </a>
                <a
                  href={authors.Portfolio}
                  target='_blank'
                  className='social-pill'
                >
                  Personal site
                </a>
              </div> */}

              <div
                className='author-bio'
                dangerouslySetInnerHTML={{
                  __html: unified()
                    .use(markdown)
                    .use(html)
                    .processSync(authors.Bio)
                }}
              />
      
            </ModalLayout>
          ) : (
            <Layout page='author'>
              <SEO title={authors.Name} />

              <SecondaryPageTitle title={authors.Name} />

              <div className='author-page-image-wrapper'>
                <img
                  src={authors.Author_image[0].url}
                />
              </div>

              <h5 className='author-role'>
                {authors.Roles}
              </h5>

              {/* <div className='social'>

                <a
                  href={authors.Twitter}
                  target='_blank'
                  className='social-pill'
                >
                  Twitter
                </a>
                  
                <a
                  href={authors.LinkedIn}
                  target='_blank'
                  className='social-pill'
                >
                  LinkedIn
                </a>

                
                <a
                  href={authors.Portfolio}
                  target='_blank'
                  className='social-pill'
                >
                  Personal site
                </a>

              </div> */}

              <div
                className='author-bio'
                dangerouslySetInnerHTML={{
                  __html: unified()
                    .use(markdown)
                    .use(html)
                    .processSync(authors.Bio)
                }}
              />
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
        LinkedIn
        Portfolio
      }
    }
  }
`;
   
export default Author;