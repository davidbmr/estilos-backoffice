import React, { useRef, useState } from "react";
import { useModal } from "@/hooks/useModal";
import { useGetFetch } from "@/hooks/useGetFetch";
import { usePostFetch } from "@/hooks/usePostFetch";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";
import { useDeleteFetch } from "@/hooks/useDeleteFetch";
import { BankDataProps } from "./types";

import { Toast } from "primereact/toast";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";

export const Bancos = () => {
	const toast = useRef<Toast>(null);
	const addModal = useModal();
	const updateModal = useModal();

	const [currentUpdateData, setCurrentUpdateData] = useState(null);

	const { data, reloadFetchData } = useGetFetch("/admin/bank");
	const { postFetchData } = usePostFetch("/admin/bank", "Banco", reloadFetchData, addModal);
	const { deleteFetchData } = useDeleteFetch("/admin/bank", "Banco", reloadFetchData);
	const { updateFetchData } = useUpdateFetch("/admin/bank", "Banco", reloadFetchData, updateModal);

	// Logica para el modal del update y sus datos
	const onUpdate = (data: BankDataProps | null) => {
		console.log(data);
		// setCurrentUpdateData(newData);
		// updateModal.onVisibleModal();
	};

	const onDelete = (data: any) => {
		deleteFetchData(data.id);
	};

	return (
		<>
			<Toast ref={toast} />
			<MainContentStructure titleText="Mantenimiento de bancos">
				<DataTable
					columns={columns}
					data={data?.data}
					textAddButton="AGREGAR BANCO"
					onAddModal={addModal.onVisibleModal}
					onUpdate={false}
					onDelete={onDelete}
				/>
			</MainContentStructure>

			{/* Add Modal */}
			<PrimeModal
				header="Agregar banco"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
			>
				<AddModal postFetchData={postFetchData} />
			</PrimeModal>

			{/* Edit Modal */}
			<PrimeModal
				header="Editar banco"
				modalStatus={updateModal.modalStatus}
				onHideModal={updateModal.onHideModal}
			>
				<AddModal updateFetchData={updateFetchData} updateData={currentUpdateData} />
			</PrimeModal>
		</>
	);
};

const columns = [
	// { nombre: "ID", campo: "id" },
	{ nombre: "Código", campo: "code" },
	{ nombre: "Nombre", campo: "name" },
	{ nombre: "Dirección", campo: "address" },
	{ nombre: "Teléfono", campo: "phone" },
	{ nombre: "Correo", campo: "email" },
	// {
	// 	nombre: "Teléfono 1",
	// 	body: (rowData: any) => {
	// 		return <>{rowData.phones[0]}</>;
	// 	},
	// },
	// {
	// 	nombre: "Teléfono 2",
	// 	body: (rowData: any) => {
	// 		return <>{rowData.phones[1]}</>;
	// 	},
	// },
];
