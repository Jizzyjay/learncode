import { Link } from "gatsby"
import * as React from "react"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup>">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" alt="" /></Link>
      <Link to="/course">Courses</Link>
      <Link to="/downnloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
      
    </div>
    Header
  </div>
)

export default Header
