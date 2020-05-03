import React from "react"
import { Link } from 'gatsby'

const HomepageHero = ({ featuredStoryImage, featuredStoryURL, featuredStoryByline, featuredStoryTitle }) => (
  <>
    
    <h3 className="hero-main-text">
      When life gives you a pandemic, you make good pandemic coverage.
    </h3>
    
    <Link className="featured-image-wrapper" to={featuredStoryURL}>
      <img src={featuredStoryImage} className="featured-image" />
    </Link>

    <Link className="featured-story-title-wrapper" to={featuredStoryURL}>
      <h5 className="featured-story-byline">
        {featuredStoryByline}
      </h5>
      <h1 className="featured-story-title">
        {featuredStoryTitle}
      </h1>
    </Link>
    
    <h2 className="intermission-text">
      stories from the disrupted.
    </h2>
    
  </>
)

export default HomepageHero