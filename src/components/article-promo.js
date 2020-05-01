import React from "react"
import { Link } from "gatsby"

export default props => (
  <article className="story-promo" key={props.index}>
    <div className="story-promo-text">
      <Link to={props.slug}>
        <h4>{props.authors}</h4>
        <h2>{props.title}</h2>
        <h5>{props.publication_date}</h5>
        <p>{props.blurb}</p>
      </Link>
    </div>
    <div className="youtube-video">
      <iframe
        src={props.video}
        title={props.index}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </article>
)