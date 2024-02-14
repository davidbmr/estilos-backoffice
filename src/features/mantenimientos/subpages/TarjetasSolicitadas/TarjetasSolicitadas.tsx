import React from "react";
import { useModal } from "@/hooks/useModal";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";

export const TarjetasSolicitadas = () => {
	const addModal = useModal();
	const { data, reloadFetchData } = useGetFetch("/admin/card");

	return (
		<>
			<MainContentStructure titleText="Tarjetas Vinculadas">
				<DataTable
					columns={columns}
					data={data?.data?.cards}
					onAddModal={addModal.onVisibleModal}
					isHeaderActive={false}
				/>
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "Número de tarjeta", campo: "cardNumber" },
	{
		nombre: "Nombre",
		body: (rowData: any) => {
			return <>{rowData.user.firstName}</>;
		},
	},
	{
		nombre: "Apellido Paterno",
		body: (rowData: any) => {
			return <>{rowData.user.lastName}</>;
		},
	},
	{
		nombre: "Apellido Materno",
		body: (rowData: any) => {
			return <>{rowData.user.secondLastName}</>;
		},
	},
	{
		nombre: "DNI",
		body: (rowData: any) => {
			return <>{rowData.user.documentNumber}</>;
		},
	},
	{
		nombre: "Departamento",
		body: (rowData: any) => {
			return <>{rowData.user.department}</>;
		},
	},
	{
		nombre: "Celular",
		body: (rowData: any) => {
			return <>{rowData.user.cellPhone}</>;
		},
	},
	{
		nombre: "Correo",
		body: (rowData: any) => {
			return <>{rowData.user.email}</>;
		},
	},
	{ nombre: "Estado", campo: "status" },
];
