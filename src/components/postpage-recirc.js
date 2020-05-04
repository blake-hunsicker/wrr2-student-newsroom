import React from 'react'
import {Link} from 'gatsby'

const PostPageRecirc = ({prevStoryURL, prevStory, nextStoryURL, nextStory}) => (
  <div className="post-page-recirc">
    <h3 className="previous">
      <Link to={prevStoryURL}>
        👈 {prevStory}
      </Link>
    </h3>
    <h3 className="next">
      <Link to={nextStoryURL}>
        {nextStory} 👉
      </Link>
    </h3>
  </div>
)

export default PostPageRecirc