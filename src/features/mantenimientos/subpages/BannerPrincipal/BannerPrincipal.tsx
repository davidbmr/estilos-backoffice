import React, { useState } from "react";
import { useModal } from "@/hooks/useModal";

import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { usePostFetch } from "@/hooks/usePostFetch";
import { useDeleteFetch } from "@/hooks/useDeleteFetch";

export const BannerPrincipal = () => {
	const addModal = useModal();

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

	const onDelete = (data: any) => {
		deleteFetchData(data.id);
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
					onDelete={onDelete}
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
		</>
	);
};

const columns = [
	{ nombre: "Nombre del Banner", campo: "name" },
	{ nombre: "URL", campo: "nameUrl" },
];
