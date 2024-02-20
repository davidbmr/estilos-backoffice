import React from "react";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";

export const HistorialUso = () => {
	const { data, reloadFetchData } = useGetFetch("/admin/history?page=1&limit=100");

	return (
		<>
			<MainContentStructure titleText="Historial de uso">
				<DataTable columns={columns} data={data?.data?.data} isHeaderActive={false} />
			</MainContentStructure>
		</>
	);
};

const columns = [
	// { nombre: "Usuario", campo: "user" },
	{ nombre: "Descripción", campo: "description" },
	// { nombre: "Tabla", campo: "table" },
	{
		nombre: "Fecha",
		body: (rowData: any) => {
			const dateData = new Date(rowData.createdAt);
			const fullDate = dateData.toLocaleDateString("es-ES", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			});
			return <>{fullDate}</>;
		},
	},
	{
		nombre: "Hora",
		body: (rowData: any) => {
			const dateData = new Date(rowData.createdAt);
			const hora = dateData.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
			return <>{hora}</>;
		},
	},
];
