import React, { useState } from "react";
import { useModal } from "@/hooks/useModal";

import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { usePostFetch } from "@/hooks/usePostFetch";
import { useDeleteFetch } from "@/hooks/useDeleteFetch";
import { VisibleModal } from "./VisibleModal/VisibleModal";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";

export const BannerPrincipal = () => {
	const addModal = useModal();
	const showModal = useModal();
	const updateModal = useModal();

	const [imgModal, setImgModal] = useState("");
	const [currentUpdateData, setCurrentUpdateData] = useState(null);

	const { data, reloadFetchData } = useGetFetch("/admin/main-banner");
	const { postFetchData } = usePostFetch(
		"/admin/main-banner",
		"Banner Principal",
		reloadFetchData,
		addModal
	);
	const { deleteFetchData } = useDeleteFetch(
		"/admin/main-banner",
		"Banner Principal",
		reloadFetchData
	);
	const { updateFetchData } = useUpdateFetch(
		"/admin/main-banner",
		"Banner Principal",
		reloadFetchData,
		updateModal
	);

	const onDelete = (data: any) => {
		deleteFetchData(data.id);
	};

	const onUpdate = (rowData: any) => {
		setCurrentUpdateData(rowData);
		updateModal.onVisibleModal();
	};

	const onShow = (rowData: any) => {
		setImgModal(rowData.banner);
		showModal.onVisibleModal();
	};
	return (
		<>
			<MainContentStructure titleText="Mantenimiento de banner principal">
				<DataTable
					columns={columns}
					data={data?.data}
					textAddButton="AGREGAR BANNER PRINCIPAL"
					onAddModal={addModal.onVisibleModal}
					isSearch={false}
					isExport={false}
					// onUpdate={onUpdate}
					onDelete={onDelete}
					onEye={onShow}
				/>
			</MainContentStructure>

			{/* Add Modal */}
			<PrimeModal
				header="Agregar banner principal"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
			>
				<AddModal postFetchData={postFetchData} />
			</PrimeModal>

			{/* Visible Modal */}
			<PrimeModal
				width={800}
				header=""
				modalStatus={showModal.modalStatus}
				onHideModal={showModal.onHideModal}
			>
				<VisibleModal img={imgModal} />
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
	{ nombre: "Nombre del Banner", campo: "name" },
	{ nombre: "Acción", campo: "action" },
	// { nombre: "Acción", campo: "action" },
];
