import React from "react"
import * as styles from "./Card.module.css"
const Card = props => {
  return (
    <div className={styles.service}>
      <img src={props.image} alt="service" className={styles.image}></img>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>{props.Title}</h1>
        </div>
        <div className={styles.description}>
          <p>{props.Description}</p>
        </div>
        <div className={styles.cto}>
          <button>{props.cto} &nbsp; &nbsp;</button>
        </div>
      </div>
    </div>
  )
}

export default Card
