import React from "react";

const Display = (props) =>{
  return(
    <div className="Display">
      <h2>{props.titulo}</h2>
      <h3>{props.label}: {props.value}</h3>
    </div>
  )
}

export default Display;