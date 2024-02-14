import React from "react";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";

export const HistorialUso = () => {
	return (
		<>
			<MainContentStructure titleText="Historial de uso">
				<DataTable columns={columns} data={data} isHeaderActive={false} />
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "Usuario", campo: "user" },
	{ nombre: "Tipo", campo: "type" },
	{ nombre: "Tabla", campo: "table" },
	{ nombre: "Fecha de modificación", campo: "date" },
	{ nombre: "Hora de modificación", campo: "hour" },
];
const data = [
	{
		user: "Alejandro",
		type: "Modificación",
		table: "Negocios aliados",
		date: "30/11/23",
		hour: "15:30",
	},
];
