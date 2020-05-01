import React from 'react'
import { Link } from 'gatsby'

const PostPageTitle = ({link, type, title, authors}) => (
  <div className="postPageTitle">
    <Link to={link}>
      <h3 className="postPageType">
        {type}
      </h3>
    </Link>
    <h1 className="postPageTitleText">
      {title}
    </h1>
    <h1 className="postPageByline">
      A story by {authors}
    </h1>
  </div>
)

export default PostPageTitle