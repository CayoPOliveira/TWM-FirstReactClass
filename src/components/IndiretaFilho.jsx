import React, {useState} from "react";

const Filho = (props) => {
  return (
    <div>
      <h2>Filho</h2>
      <textarea className="nome" name="Nome" id="1" cols="30" rows="1"></textarea><br />
      <textarea className="idade" name="Idade" id="2" cols="30" rows="1"></textarea><br />

      <button onClick={
        function(e){
          props.quandoClicar('Andre', 10);
        }
      }>Botão</button>
      <br /><br />
    </div>
  );
}

export default Filho;