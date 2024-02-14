import React from "react";
import { useModal } from "@/hooks/useModal";
import { useGetFetch } from "@/hooks/useGetFetch";

import { useUpdateFetch } from "@/hooks/useUpdateFetch";

import { DistrictsData } from "./types";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";

export const Distritos = () => {
	const addModal = useModal();
	const updateModal = useModal();

	const { data, reloadFetchData } = useGetFetch<DistrictsData>("/admin/district");

	const { updateFetchData } = useUpdateFetch(
		"/admin/district",
		"Distrito",
		reloadFetchData,
		updateModal
	);

	const handleUpdate = (rowData: any) => {
		updateFetchData(rowData.id, {
			active: !rowData.active,
		});
	};

	return (
		<>
			<MainContentStructure titleText="Mantenimiento de distrito">
				<DataTable
					columns={columns}
					data={data?.data}
					onAddModal={addModal.onVisibleModal}
					onDelete={handleUpdate}
					isHeaderActive={false}
					isExport={false}
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
