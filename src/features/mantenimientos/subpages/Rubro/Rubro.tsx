import React, { useState } from "react";
import { useModal } from "@/hooks/useModal";

import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { usePostFetch } from "@/hooks/usePostFetch";
import { useDeleteFetch } from "@/hooks/useDeleteFetch";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";

export const Rubro = () => {
	const addModal = useModal();
	const updateModal = useModal();

	const [currentUpdateData, setCurrentUpdateData] = useState(null);

	const { data, reloadFetchData } = useGetFetch("/admin/rubro");
	const { postFetchData } = usePostFetch("/admin/rubro", "Rubro", reloadFetchData, addModal);
	const { deleteFetchData } = useDeleteFetch("/admin/rubro", "Rubro", reloadFetchData);
	const { updateFetchData } = useUpdateFetch("/admin/rubro", "Rubro", reloadFetchData, updateModal);

	const onDelete = (data: any) => {
		deleteFetchData(data.id);
	};

	const onUpdate = (rowData: any) => {
		setCurrentUpdateData(rowData);
		updateModal.onVisibleModal();
	};
	return (
		<>
			<MainContentStructure titleText="Mantenimiento de rubros">
				<DataTable
					columns={columns}
					data={data?.data}
					textAddButton="AGREGAR RUBRO"
					onAddModal={addModal.onVisibleModal}
					isSearch={false}
					isExport={false}
					onUpdate={onUpdate}
					onDelete={onDelete}
				/>
			</MainContentStructure>

			{/* Add Modal */}
			<PrimeModal
				header="Agregar rubro"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
			>
				<AddModal postFetchData={postFetchData} />
			</PrimeModal>

			{/* Edit Modal */}
			<PrimeModal
				header="Editar rubro"
				modalStatus={updateModal.modalStatus}
				onHideModal={updateModal.onHideModal}
			>
				<AddModal updateFetchData={updateFetchData} updateData={currentUpdateData} />
			</PrimeModal>
		</>
	);
};

const columns = [
	{ nombre: "Nombre", campo: "name" },
	{ nombre: "URL", campo: "nameUrl" },
];
