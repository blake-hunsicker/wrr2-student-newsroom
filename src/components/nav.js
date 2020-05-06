import { Link, graphql } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.toggleSections= this.toggleSections.bind(this);
    this.state = {
      showSections: false
    }
  }

  toggleSections(e) {
    e.preventDefault()
    this.setState(state => ({
      showSections: !state.showSections
    }));
  }

  render() {

    const {showSections} = this.state.showSections
    return (
      <nav>
        <div className="logo">
          <Link
            to='/'
          >
            {this.props.children}  
          </Link>
        </div>
        <div className="hamburger" onClick={this.toggleSections}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="sections">
          <ul className={`${ this.state.showSections ? "hide" : "show"}`}>
            <li>
              <Link
                to="/about"
                activeClass="active-section"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/coping"
                activeClass="active-section"
              >
                coping
              </Link>
            </li>
            <li>
              <Link
                to="/uplifting"
                activeClass="active-section"
              >
                uplifting
              </Link>
            </li>
            <li>
              <Link
                to="/innovating"
                activeClass="active-section"
              >
                innovating
              </Link>
            </li>
            <li>
              <Link
                to="/making-money"
                activeClass="active-section"
              >
                making money
              </Link>
            </li>
          </ul>
        </div>
        
      </nav>
    )
  }
}

// const Nav = ({children}) => (
//   <nav>
//     <div className="logo">
//       <Link
//         to='/'
//       >
//         {children}  
//       </Link>
//     </div>
//     <div className="sections">
//       <ul>
//         <li><Link to="/about">about</Link></li>
//         <li><Link to="/coping">coping</Link></li>
//         <li><Link to="/uplifting">uplifting</Link></li>
//         <li><Link to="/innovating">innovating</Link></li>
//         <li><Link to="/making-money">making money</Link></li>
//       </ul>
//       <div className="hamburger" onClick="toggleMenu()">
//         🗺
//       </div>
//     </div>
//   </nav>
// )

export const query = graphql`
  query {
    file(relativePath: { eq: "./images/logo.svg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Nav