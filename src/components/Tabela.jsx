import React from "react";
import data_json from "../data.json";

function Tabela() {

		let mostra_dado = data_json.map((info) => {
			return (
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.city}</td>
				</tr>
			);
		});
		return mostra_dado;

}

export default Tabela;