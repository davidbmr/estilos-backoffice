import React, { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { useGetFetch } from "@/hooks/useGetFetch";

import { useUpdateFetch } from "@/hooks/useUpdateFetch";

import { ProvinceData } from "./types";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";

export const Provincias = () => {
	const addModal = useModal();
	const updateModal = useModal();

	const { data, reloadFetchData } = useGetFetch<ProvinceData>("/admin/province");

	const { updateFetchData } = useUpdateFetch(
		"/admin/province",
		"Provincia",
		reloadFetchData,
		updateModal
	);

	const handleUpdate = (rowData: any) => {
		updateFetchData(
			rowData.id,
			{
				active: !rowData.active,
			},
			"put"
		);
	};

	return (
		<>
			<MainContentStructure titleText="Mantenimiento de provincia">
				<DataTable
					columns={columns}
					data={data?.data}
					onAddModal={addModal.onVisibleModal}
					onDelete={handleUpdate}
					isExport={false}
					isHeaderActive={false}
				/>
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "Nombre", campo: "name" },
	{ nombre: "Ubigeo", campo: "id" },
	{
		nombre: "Estado",
		body: (rowData: any) => {
			return <>{rowData.active ? <p>Activo</p> : <p>Bloqueado</p>}</>;
		},
	},
];
