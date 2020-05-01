import React from "react"
import { Link } from "gatsby"

export default props => (
  <div className="category-recirc">
    <div className="left">
      <Link to="/">
        👈 Prev
      </Link>
    </div>
    <div className="right">
      <Link to="/">
        Next 👉
      </Link>
    </div>
  </div>
)