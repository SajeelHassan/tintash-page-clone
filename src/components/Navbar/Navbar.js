import { Link } from "gatsby"
import React from "react"
import * as styles from "./Navbar.module.css"
import Img from "gatsby-image"
const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <Img></Img>
      </div>
      <div className={styles.links}>
        <Link to="/">About Us</Link>
        <Link to="/">Services</Link>
        <Link to="/">Verticals</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/"> +1 (415) 234-0744</Link>
      </div>
    </nav>
  )
}

export default Navbar
