import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }

    }
  `)

  return (
    <>
      <Header  />
        <main>{children}</main>
        <Footer data={data}>
      Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:ekunolapaul@gmail.com" target="_blank" rel="noreferrer">Email us</a> to ask anything. 
      <br/>
    Designed By: Pscon   ©2022
    </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout