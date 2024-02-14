import React from "react";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { useNavigate } from "react-router-dom";

export const Establecimientos = () => {
	const navigate = useNavigate();

	const { data, reloadFetchData } = useGetFetch("/admin/establishment");

	const handleNavigateDetails = (rowData: any) => {
		navigate(`/establecimiento/detalle/${rowData?.id}`);
	};

	return (
		<>
			<MainContentStructure titleText="Establecimientos">
				<DataTable
					columns={columns}
					data={data?.data}
					isSearch={false}
					onEye={handleNavigateDetails}
					onDelete={false}
					isHeaderActive={false}
				/>
			</MainContentStructure>
		</>
	);
};

const columns = [
	{
		nombre: "Nombre del establecimiento",
		body: (rowData: any) => {
			return <>{rowData.businessName}</>;
		},
	},
	{
		nombre: "Nombre comercial",
		body: (rowData: any) => {
			return <>{rowData.tradeName}</>;
		},
	},
	{
		nombre: "Descripción",
		body: (rowData: any) => {
			return <>{rowData.establishmentDescription}</>;
		},
	},
	{
		nombre: "Industria",
		body: (rowData: any) => {
			return <>{rowData.industry}</>;
		},
	},
	{ nombre: "RUC", campo: "ruc" },
	{
		nombre: "Activo",
		body: (rowData: any) => {
			return <>{rowData.isActive ? "Habilitado" : "Deshabilitado"}</>;
		},
	},
];
