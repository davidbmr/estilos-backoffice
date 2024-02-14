import React from "react";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";

export const LogFallas = () => {
	const { data, reloadFetchData } = useGetFetch("/errors");
	console.log(data);

	return (
		<>
			<MainContentStructure titleText="Log de fallas">
				<DataTable columns={columns} data={data?.data} isHeaderActive={false} />
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "ID", campo: "id" },
	{ nombre: "Error", campo: "error" },
	{ nombre: "Status", campo: "status" },
	{ nombre: "Url", campo: "url" },

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
