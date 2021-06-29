import React from "react"
import * as styles from "./Header.module.css"

const Header = props => {
  return (
    <div>
      <div className={styles.title}>
        <h1>Services</h1>
      </div>
      <div className={styles.title_description}>
        <p>
          We offer expertise for end-to-end product design and development, with
          solutions tailor-made to fit your product’s unique requirements
        </p>
      </div>
    </div>
  )
}
export default Header
