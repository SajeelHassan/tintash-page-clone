import React from "react"
import * as styles from "./Card.module.css"
const Card = props => {
  return (
    <div className={styles.service}>
      <img src={props.image} alt="service"></img>
      <div>
        <h1>{props.Title}</h1>
      </div>
      <div>
        <p>{props.Description}</p>
      </div>
      <div>
        <button>{props.cto}</button>
      </div>
    </div>
  )
}

export default Card
