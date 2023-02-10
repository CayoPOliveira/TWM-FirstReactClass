/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => (
  <div>
    <h1>Dentro do componente</h1>
    <h2>Olá {props.nome}!!</h2>
  </div>
);