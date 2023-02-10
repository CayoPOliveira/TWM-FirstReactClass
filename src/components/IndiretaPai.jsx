import React, {useState} from "react";
import Filho from "./IndiretaFilho";

const Pai = () =>{
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);

  function carregaInformacoes(nomeParam, idadeParam){
    setNome(nomeParam);
    setIdade(idadeParam);
  }

  return(
    <div>
      <h2>Pai = {nome} </h2>
      <h3>Idade = {idade} </h3>
      <br /><br />
      <Filho quandoClicar={carregaInformacoes}></Filho>
    </div>
  )
}

export default Pai;