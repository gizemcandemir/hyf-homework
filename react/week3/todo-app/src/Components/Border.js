import React from "react"

function Border(props) {
  return(
    <div style={{ border: "2px solid #000", margin: "1em" }}>
      {props.children}
    </div>
  )
}

export default Border