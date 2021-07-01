import React from "react"

import { Link } from "gatsby"
import * as styles from "./Footer.module.css"
import Container from "../Helpers/Container"
import Background from "../Helpers/Background"
const Footer = props => {
  const data = props.data.allFooterJson.edges[0].node
  const scrollToTop = e => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <>
      <Background color="#282c34" height="23.625rem">
        <Container>
          <div className={styles.mainFooter}>
            <div className={styles.addresses}>
              <ul>
                <h2>Addresses</h2>
                {data.Address.map(address => (
                  <li key={Math.random()}>
                    <h4>
                      {address.City}, {address.Country}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.centerHeadline}>
              <h2>Come work with us!</h2>
              <p>
                We are always looking for great people with talent to join our
                teams.
              </p>
              <Link to="/" className={styles.centerHeadlineLink}>
                Careers
              </Link>
            </div>
            <div className={styles.social}>
              <h2>Social</h2>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="src\images\fb.svg" alt="FB"></img>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="images\tw.svg" alt="TW"></img>
                </a>
                <a
                  href="https://www.linkedin.com/tintash"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="images\in.svg" alt="In"></img>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Background>
      <Background color="#1f2229" height="4.625rem">
        <Container>
          <div className={styles.endFooter}>
            <div className={styles.rights}>
              <p>{data.Copyright}</p>
              <a href="/">Privacy Policy</a>
            </div>
            <div className={styles.backToTop}>
              <a onClick={scrollToTop}>Back to Top</a>
            </div>
          </div>
        </Container>
      </Background>
    </>
  )
}

export default Footer
