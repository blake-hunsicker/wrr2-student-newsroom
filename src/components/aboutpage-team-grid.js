import React from "react"
import SecondaryPageTitle from "../components/secondarypage-title"

const AboutTeamGrid = ({ children }) => (

  <>
    <div className="team-label">
      The Team
    </div>
    <div className="team-cards">
      {children}
    </div>
  </>  
  
)

export default AboutTeamGrid