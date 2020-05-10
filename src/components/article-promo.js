import React from "react"
import { Link } from "gatsby"

export default props => (
  <Link
    className="story-promo"
    key={props.index}
    to={props.slug}
  >
    <div className="story-promo-text">
      <h5 className='story-promo-byline'>{props.authors}</h5>
      <h3 className='story-promo-title'>{props.title}</h3>
    </div>
    <div className="story-promo-image-wrapper">
      <img src={props.image} className="story-promo-image" />
    </div>
  </Link>
)