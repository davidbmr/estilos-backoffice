import React from "react";
import { useModal } from "@/hooks/useModal";

import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { useNavigate } from "react-router-dom";

export const MenuAyuda = () => {
	const navigate = useNavigate();
	const addModal = useModal();

	const { data, reloadFetchData } = useGetFetch("/admin/faqs");

	const handleNavigate = (rowData: any) => {
		navigate(`/menu-ayuda/${rowData._id}`);
	};

	return (
		<>
			<MainContentStructure titleText="Mantenimiento del menú de ayuda">
				<DataTable
					columns={columns}
					data={data?.data}
					textAddButton="AGREGAR AYUDA"
					onAddModal={addModal.onVisibleModal}
					isSearch={false}
					isExport={false}
					onUpdate={handleNavigate}
				/>
			</MainContentStructure>

			{/* Add Modal */}
			<PrimeModal
				header="Agregar ayuda"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
			>
				<AddModal postFetchData={() => {}} />
			</PrimeModal>
		</>
	);
};

const columns = [
	{ nombre: "Pregunta", campo: "question" },
	{
		nombre: "Respuesta",
		body: (rowData: any) => {
			return <p>{rowData.response.title}</p>;
		},
	},
];
