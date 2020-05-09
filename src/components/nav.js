import React from "react"
import { Link, graphql } from "gatsby"
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
          <ul className={`${ this.state.showSections === false ? "hide" : "show"}`}>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/coping">
                Coping
              </Link>
            </li>
            <li>
              <Link to="/uplifting">
                Uplifting
              </Link>
            </li>
            <li>
              <Link to="/innovating">
                Innovating
              </Link>
            </li>
            <li>
              <Link to="/making-money">
                Making Money
              </Link>
            </li>
          </ul>
        </div>
        
      </nav>
    )
  }
}

export default Nav