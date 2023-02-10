import React, {useState} from "react";

const Contador = (props) => {
  const [valor, setValor] = useState(0);
  const [passo, setPasso] = useState(2);

  const Inc = () => {
    setValor(valor + passo);
  }
  const Dec = () => {
    setValor(valor - passo);
  }

  return(
    <div className="Contador">
      <h2>Contador</h2>
      <h3>Valor Atual: {valor}</h3>
      <div>
        <label htmlFor="passoInput">Passo</label>
        <input 
          id="passoInput" 
          typeof="number" 
          value = {passo} 
          onChange={e => setPasso(+e.target.value)}
        />
      </div>
      <div>
        <button onClick={Inc}> + </button>
        <button onClick={Dec}> - </button>
      </div>
    </div>
  );

}

export default Contador;