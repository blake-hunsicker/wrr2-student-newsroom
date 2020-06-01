import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ZoomImage from "../images/zoom.jpg"
import SecondaryPageTitle from "../components/secondarypage-title"
import AboutPageHero from "../components/aboutpage-hero"
import AboutTeamGrid from "../components/aboutpage-team-grid"

const AboutPage = ({ data }) => {

  const authors = data.allAirtable

  return (

    <Layout page="about">

      <SEO
        title='About | Paused'
        description='Stories about the global impacts of the COVID-19 pandemic, told by Journalism graduate students from the Studio 20 - Digital First program at the New York University. Stories about how people around the world are coping with the coronavirus situation, innovating and finding new ways of dealing with the stress, the anxiety and other hardships of these times.'
        image='https://wrr2-student-newsroom.netlify.app/static/zoom-d33e3af113c7eba831c0df3f5083e372.jpg'
      />
      
      <SecondaryPageTitle title="About" />
      
      <AboutPageHero />

      <div className="about-page-summary">
        <p>As we write this on 11 May, over 250,000 people have died from COVID-19 and more than 4 million have tested positive for it. The widespread, global effect of the pandemic feels very tangible as we trade stories of heartbreak and loss over our weekly Zoom calls from all over the world.</p>
        <p>We are a group of graduate students from 12 countries who traveled to New York City for a common goal: take part in a digital innovation program at NYU Journalism called Studio 20. What we didn't expect was that all of a sudden, the idea of innovation would have so much weight added to it, becoming a matter of survival for people around the globe. </p>
        <p>We started the year eager to tell stories unique to New York City, but now we aim to tell you stories about this pandemic that has affected the lives of every single person on the planet. From Ecuador to Pakistan, from Brazil to New York City, we want to tell stories about how people are innovating with what they can. Sometimes, that means creating an advanced technological system to keep track of citizens' health conditions. But sometimes, innovation means something as simple as encouraging acts of solidarity.</p>
        <p>We hope to show how businesses thrive under extraordinary circumstances and how couples profess their love for one another while social distancing, while also showing you how joblessness and evictions have altered the DNA of an entire generation. As we ourselves attempt to cope with losses of our own, we continue to report on the state of the world while self-isolating, while <span className='italic'>on pause</span>. These are stories of coping, innovation, and everything else that brings us all together at this moment. These are stories about humanity, from a world upended.</p>
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
            <h4 className="author-card-name">
              {data.Name}
            </h4>
            <p className="author-card-role">
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