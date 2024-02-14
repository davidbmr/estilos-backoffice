import React from "react";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { useNavigate } from "react-router-dom";

export const Sedes = () => {
	const navigate = useNavigate();

	const { data, reloadFetchData } = useGetFetch("/admin/location/general");

	const handleNavigateDetails = (rowData: any) => {
		navigate(`/sedes/detalle/${rowData?.id}`);
	};

	return (
		<>
			<MainContentStructure titleText="Sedes">
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
		nombre: "Nombre Comercial",
		body: (rowData: any) => {
			return <>{rowData.business.businessName}</>;
		},
	},
	{
		nombre: "Industria",
		body: (rowData: any) => {
			return <>{rowData.business.industry}</>;
		},
	},
	{
		nombre: "RUC",
		body: (rowData: any) => {
			return <>{rowData.business.ruc}</>;
		},
	},
	{ nombre: "Dirección", campo: "address" },
	{
		nombre: "Departamento",
		body: (rowData: any) => {
			return <>{rowData.department.name}</>;
		},
	},
	{
		nombre: "Provincia",
		body: (rowData: any) => {
			return <>{rowData.province.name}</>;
		},
	},
	{
		nombre: "Distrito",
		body: (rowData: any) => {
			return <>{rowData.district.name}</>;
		},
	},
	{
		nombre: "Activo",
		body: (rowData: any) => {
			return <>{rowData.isActive ? "Habilitado" : "Deshabilitado"}</>;
		},
	},
];
