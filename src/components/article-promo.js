import React from "react"
import { Link } from "gatsby"

export default props => (
  <article className="story-promo" key={props.index}>
    <div className="story-promo-text">
      <Link to={props.slug}>
        <h5>{props.authors}</h5>
        <h3>{props.title}</h3>
      </Link>
    </div>
    <div className="story-promo-image-wrapper">
      <img src={props.image} className="story-promo-image" />
    </div>
  </article>
)