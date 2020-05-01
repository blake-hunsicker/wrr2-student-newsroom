import { Link } from "gatsby"
import React from "react"

const Nav = () => (
  <nav>
    <div className="navbar"> 
  <div className="vertical-line">
      <section className="logo">
        <h3>
          <Link to="/">STUDIO 20</Link>
        </h3>
      </section>
  </div>
      <section className="headings">
        <ul>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/coping">coping</Link></li>
          <li><Link to="/uplifting">uplifting</Link></li>
          <li><Link to="/innovating">innovating</Link></li>
          <li><Link to="/making-money">making money</Link></li>
      </ul>
      </section>
    </div>
  </nav>
)

export default Nav