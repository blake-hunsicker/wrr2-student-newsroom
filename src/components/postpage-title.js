import React from 'react'
import { Link } from 'gatsby'

const PostPageTitle = ({link, type, title, authorLink, authors}) => (
  <div className="post-page-title">
    <Link to={link} className="category-link">
      <h4 className="post-page-type">
        {type}
      </h4>
    </Link>
    <h1 className="post-page-title-text">
      {title}
    </h1>
    <h1 className="post-page-byline">
      A story by <Link to={authorLink} className="author-link">{authors}</Link>
    </h1>
  </div>
)

export default PostPageTitle