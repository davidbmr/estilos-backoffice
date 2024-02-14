import React from "react";
import { useModal } from "@/hooks/useModal";

import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";

export const GestionRoles = () => {
	const addModal = useModal();

	return (
		<>
			<MainContentStructure titleText="Lista de roles">
				<DataTable
					columns={columns}
					data={data}
					onAddModal={addModal.onVisibleModal}
					isHeaderActive={false}
				/>
			</MainContentStructure>

			{/* Add Modal */}
			<PrimeModal
				header="Agregar roles"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
			>
				<AddModal postFetchData={() => {}} />
			</PrimeModal>
		</>
	);
};

const columns = [{ nombre: "Nombre del rol", campo: "name" }];

const data = [
	{ id: 1, name: "admin" },
	{ id: 2, name: "store" },
	{ id: 3, name: "pos" },
];
