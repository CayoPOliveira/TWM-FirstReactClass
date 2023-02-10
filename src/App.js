/** @format */

//import Componente01 from "./components/Componente01";
// import Pai from "./components/IndiretaPai";
//import React, { useState } from "react";
import Contador from "./components/Contador2";

function App() {
	// const [nome, setNome] = useState("Fulano");
	// const [contador, setContador] = useState(0);

	// SEM O useState teria que existir algo assim
	// var nome = ("Fulano");
	// const setNome2 = (nome) => {
	// 	nome = nome;
	// };

	// const verificaUseState = () => {
	// 	console.log(nome);
	// 	setNome("Marcio");
	// 	console.log(nome);
	// };

	return (
		<div className="App">
			{/* <Componente01 nome="Cayo Phellipe" /> */}
			{/* <button onClick={verificaUseState}>Verificar</button> */}
			{/* <Pai></Pai> */}
			<Contador></Contador>
		</div>
	);
}

export default App;
