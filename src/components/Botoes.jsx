import React from "react";

const Botoes = (props) =>{
  return (
    <div className="Botao">
      <table>
        <tr>
          <th> 
            <button type="button" onClick={props.method1}>{props.value1}</button>
          </th>
          <th>
            <button type="button" onClick={props.method2}>{props.value2}</button>
          </th>
        </tr>
      </table>
    </div>
  )
}

export default Botoes;