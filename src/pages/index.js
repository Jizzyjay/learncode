import React from "react"
import { Link } from "gatsby"


const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />code React Apps</h1>
        <p>Prototypes and build apps with React and Swift </p>
        <p>
          <Link to="/page-2/">Watch The video</Link> <br />
          
        </p>
        <div className="Logos">
            <img src={require("../images/logo-sketch.png").default}
            alt="logos" width="50" />
            <img src={require("../images/logo-figma.png").default}
              alt="logos" width="50" />
            <img src={require("../images/logo-xcode.png").default}
              alt="logos" width="50" />
            <img src={require("../images/logo-framer.png").default}
              alt="logos" width="50" />
            <img src={require("../images/logo-react.png").default}
              alt="logos" width="50" />
            <img src={require("../images/logo-swift.png").default}
              alt="logos" width="50" />
          </div>
      </div>
    </div>
    
      
  </div>
)

export default IndexPage
