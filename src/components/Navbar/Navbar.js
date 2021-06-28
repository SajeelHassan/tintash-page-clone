import { Link } from "gatsby"
import { divide } from "lodash"
import React from "react"
import { classes } from "../Navbar/navbar.module.css"
import Img from "gatsby-image"
const Navbar = () => {
  return (
    <nav>
      <div className={classes.logo}>
        {" "}
        <Link to="/"> </Link>{" "}
      </div>
    </nav>
  )
}

export default Navbar
