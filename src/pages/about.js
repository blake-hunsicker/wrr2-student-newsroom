import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SecondaryPageTitle from "../components/secondarypage-title"
import AboutPageHero from "../components/aboutpage-hero"
import AboutTeamGrid from "../components/aboutpage-team-grid"

const AboutPage = ({ data }) => {

  const authors = data.allAirtable

  return (

    <Layout page="about">

      <SEO title="About" />
      
      <SecondaryPageTitle title="About" />
      
      <AboutPageHero />

      <div className="about-page-summary">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      
      <AboutTeamGrid>
        {authors.nodes.map(({data}, index) => (
          <Link
            className="author-card"
            to={data.Slug}
            state={{
              modal: true,
              noScroll: true
            }}
          >
            <div className="author-image-wrapper">
              <img
                src={data.Author_image[0].url}
              />
            </div>
            <h4 className="author-name">
              {data.Name}
            </h4>
            <p className="author-role">
              {data.Roles}
            </p>
          </Link> 
        ))}
      </AboutTeamGrid>
            
    </Layout>

  )
}

export const pageQuery = graphql`
  query {
    allAirtable(filter: {data: {Name: {ne: null}}}) {
      nodes {
        data {
          Name
          Author_image {
            url
          }
          Roles
          Slug
        }
      }
    }
  }
`;

export default AboutPage