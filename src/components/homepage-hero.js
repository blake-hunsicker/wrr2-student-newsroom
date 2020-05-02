import React from "react"
import { Link } from 'gatsby'

const HomepageHero = ({ featuredStoryImage, featuredStoryURL, featuredStoryByline, featuredStoryTitle }) => (
  <>
    
    <div className="hero-main-text">
      When life gives you a pandemic, you make good pandemic coverage.
    </div>
    
    <Link className="featured-image-wrapper" to={featuredStoryURL}>
      <img src={featuredStoryImage} className="featured-image" />
    </Link>

    <Link className="featured-story-title-wrapper" to={featuredStoryURL}>
      <h3 className="featured-story-byline">
        {featuredStoryByline}
      </h3>
      <div className="featured-story-title">
        {featuredStoryTitle}
      </div>
    </Link>
    
    <div className="intermission-text">
      stories from the disrupted.
    </div>
    
  </>
)

export default HomepageHero