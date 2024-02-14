import React from "react";
import { useModal } from "@/hooks/useModal";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";

export const RecargaBilletera = () => {
	const addModal = useModal();

	const { data, reloadFetchData } = useGetFetch("/admin/transaction/wallet-recharge");

	return (
		<>
			<MainContentStructure titleText="Recarga de billetera">
				<DataTable
					columns={columns}
					data={data?.data?.transactions}
					onAddModal={addModal.onVisibleModal}
					isHeaderActive={false}
				/>
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "N° Operación", campo: "uuid" },
	{
		nombre: "Cliente",
		body: (rowData: any) => {
			return <>{rowData.sender.firstName}</>;
		},
	},
	{
		nombre: "Apellido Paterno",
		body: (rowData: any) => {
			return <>{rowData.sender.firstName}</>;
		},
	},
	{
		nombre: "DNI del cliente",
		body: (rowData: any) => {
			return <>{rowData.sender.documentNumber}</>;
		},
	},
	{
		nombre: "Receptor",
		body: (rowData: any) => {
			return <>{rowData.receiver.firstName}</>;
		},
	},
	{
		nombre: "Documento del Receptor",
		body: (rowData: any) => {
			return <>{rowData.receiver.documentNumber}</>;
		},
	},
	{ nombre: "Monto", campo: "amount" },
	{ nombre: "Comisión", campo: "comision" },
	{ nombre: "Fecha", campo: "createdAt" },
];
