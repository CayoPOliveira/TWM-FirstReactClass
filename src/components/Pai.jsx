import React from "react";
import Filho from "./Filho.jsx"

const Pai = (props) =>{
  return(
    <div>
      <h1>{props.sobrenome}</h1>
      <h2>{props.cidadeNatal}</h2>
      <Filho nome='Vinicius' idade={11}></Filho>
      <Filho nome='Cayo' idade={10}></Filho>
    </div>
  );
};

export default Pai;
