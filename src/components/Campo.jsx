/** @format */

import React from "react";

const Campo = (props) => {
  return(
    <div className="Campo">
      <label htmlFor="Input">{props.identifier}</label>
      <input id="Input" typeof="number" value = {props.passo} onChange={e => props.set(+e.target.value)}/>
    </div>
  );
};

export default Campo;
