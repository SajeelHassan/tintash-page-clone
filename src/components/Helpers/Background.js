import React from "react"

const Background = props => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        height: props.height,
        width: "100%",
      }}
    >
      {props.children}
    </div>
  )
}
export default Background
