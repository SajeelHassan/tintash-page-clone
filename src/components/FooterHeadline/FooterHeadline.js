import React from "react"

import * as styles from "./FooterHeadline.module.css"

const FooterHeadline = () => {
  return (
    <>
      <div className={styles.headlineOne}>
        <h2>We Have worked with some great clients!</h2>
        <button>See our Portfolio</button>
      </div>
      <div className={styles.headlineTwo}>
        <button>Let's Get Started</button>
      </div>
    </>
  )
}
export default FooterHeadline
