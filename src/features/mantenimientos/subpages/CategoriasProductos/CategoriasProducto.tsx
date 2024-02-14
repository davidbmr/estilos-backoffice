import React from "react";
import { useModal } from "@/hooks/useModal";

import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { usePostFetch } from "@/hooks/usePostFetch";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";
import { useDeleteFetch } from "@/hooks/useDeleteFetch";

export const CategoriasProductos = () => {
	const addModal = useModal();
	const updateModal = useModal();

	const { data, reloadFetchData } = useGetFetch("/admin/category");
	const { postFetchData } = usePostFetch("/admin/category", "Categoría", reloadFetchData, addModal);
	const { deleteFetchData } = useDeleteFetch("/admin/category", "Categoría", reloadFetchData);
	const { updateFetchData } = useUpdateFetch(
		"/admin/category",
		"Categoría",
		reloadFetchData,
		updateModal
	);

	// Logica para el modal del update y sus datos
	const onUpdate = (data: any) => {
		console.log(data);
		// setCurrentUpdateData(newData);
		// updateModal.onVisibleModal();
	};

	const onDelete = (data: any) => {
		deleteFetchData(data.id);
	};
	return (
		<>
			<MainContentStructure titleText="Mantenimiento de categorías">
				<DataTable
					columns={columns}
					data={data?.data}
					textAddButton="AGREGAR CATEGORÍA"
					onAddModal={addModal.onVisibleModal}
					onDelete={onDelete}
				/>
			</MainContentStructure>

			{/* Add Modal */}
			<PrimeModal
				header="Agregar categoría"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
			>
				<AddModal postFetchData={postFetchData} />
			</PrimeModal>
		</>
	);
};

const columns = [
	{ nombre: "Nombre de Categoría", campo: "name" },
	{ nombre: "URL", campo: "nameUrl" },
];
