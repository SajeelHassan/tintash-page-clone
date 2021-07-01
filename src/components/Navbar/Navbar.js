import { Link } from "gatsby"
import React, { useState } from "react"
import * as styles from "./Navbar.module.css"
import Background from "../Helpers/Background"

const Navbar = () => {
  const [Navbar, setNavbar] = useState(false)
  console.log(window.scrollY)
  const logoBlue = "images/logo_blue.webp"
  const logoWhite = "images/logo_white.webp"
  const changeBackground = () => {
    if (window.scrollY > 35) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeBackground)
  return (
    <Background color={Navbar ? "white" : "transparent"} height="7vh">
      <nav className={styles.Navbar}>
        <div className={styles.logo}>
          <img src={Navbar ? logoBlue : logoWhite} alt="logo" />
        </div>
        <div className={styles.links}>
          <Link to="/" className={Navbar ? styles.linkTwo : styles.link}>
            About Us
          </Link>
          <Link to="/" className={Navbar ? styles.linkTwo : styles.link}>
            Services
          </Link>
          <Link to="/" className={Navbar ? styles.linkTwo : styles.link}>
            Verticals
          </Link>
          <Link to="/" className={Navbar ? styles.linkTwo : styles.link}>
            Portfolio
          </Link>
          <Link to="/" className={Navbar ? styles.linkTwo : styles.link}>
            Contact Us
          </Link>
          <Link to="/" className={Navbar ? styles.linkTwo : styles.link}>
            {" "}
            +1 (415) 234-0744
          </Link>
        </div>
      </nav>
    </Background>
  )
}

export default Navbar
