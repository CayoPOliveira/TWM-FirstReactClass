/** @format */

//import logo from './logo.svg';
import "./App.css";
import Tabela from "./components/Tabela";

function App() {
	const num = 15;
	const f1 = () => {
		console.log("Dentro da F1");
		return (
			<div className="divF1">
				<h2>{num}</h2>
			</div>
		);
	};

	return (
		<div className="App">
			<h1> Hello World! </h1>
			<div className="teste">
				<p> Teste de Divs </p>
			</div>
			<p>{num}</p>
			<p>{f1()}</p>
			<div className="div_table">
				<table class="table tabela-json">
					<thead>
						<tr>
							<th>Sr.NO</th>
							<th>Name</th>
							<th>City</th>
						</tr>
					</thead>
					<tbody>
						<Tabela />
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
