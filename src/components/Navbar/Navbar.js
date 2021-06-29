import { Link } from "gatsby"
import React from "react"
import * as styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <img src="images/logo_blue.webp" alt="logo" />
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
