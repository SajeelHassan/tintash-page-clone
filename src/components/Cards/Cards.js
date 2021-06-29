import React from "react"
import Card from "../Card/Card"

const Cards = props => {
  return (
    <>
      <ul style={{ marginTop: "25px", marginBottom: "40px" }}>
        {props.children}
      </ul>
    </>
  )
}
export default Cards
