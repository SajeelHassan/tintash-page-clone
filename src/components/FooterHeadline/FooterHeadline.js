import React from "react"

import * as styles from "./FooterHeadline.module.css"
import Container from "../Helpers/Container"
import Background from "../Helpers/Background"
const FooterHeadline = () => {
  return (
    <>
      <Background color="#494f5e" height="7.12rem">
        <Container>
          <div className={styles.headlineOne}>
            <h2>We Have worked with some great clients!</h2>
            <button>See our Portfolio</button>
          </div>
        </Container>
      </Background>
      <Background color="#30333a" height="4.625rem">
        <Container>
          <div className={styles.headlineTwo}>
            <button>Let's Get Started</button>
          </div>
        </Container>
      </Background>
    </>
  )
}
export default FooterHeadline
