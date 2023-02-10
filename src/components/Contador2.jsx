import React, {useState} from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import Campo from "./Campo";

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
      {/* Display */}
      <div className="DisplayContador">
        <Display titulo="Contador" label="Valor Atual" value={valor} />
      </div>
      {/* Campo */}
      <div className="CampoContador">
        <Campo cayo={1} identifier="Passo" set={setPasso}></Campo>
      </div>
      {/* Botões */}
      <div className="BotoesContador">
        <Botoes method1={Inc} value1="+" method2={Dec} value2="-"></Botoes>  
      </div>
    </div>
  );

}

export default Contador;