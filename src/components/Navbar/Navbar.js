import { Link } from "gatsby"
import React from "react"
import * as styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <img src="images/logo_white.webp" alt="logo" />
      </div>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          About Us
        </Link>
        <Link to="/" className={styles.link}>
          Services
        </Link>
        <Link to="/" className={styles.link}>
          Verticals
        </Link>
        <Link to="/" className={styles.link}>
          Portfolio
        </Link>
        <Link to="/" className={styles.link}>
          Contact Us
        </Link>
        <Link to="/" className={styles.link}>
          {" "}
          +1 (415) 234-0744
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
