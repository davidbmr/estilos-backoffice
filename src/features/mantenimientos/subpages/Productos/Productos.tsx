import React from "react";
import { useModal } from "@/hooks/useModal";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { usePostFetch } from "@/hooks/usePostFetch";
import { useGetFetch } from "@/hooks/useGetFetch";

export const Producto = () => {
	const addModal = useModal();

	const { data, reloadFetchData } = useGetFetch("/admin/product");
	const { postFetchData } = usePostFetch("/admin/product", "Producto", reloadFetchData, addModal);

	return (
		<>
			<MainContentStructure titleText="Producto">
				<DataTable
					columns={columns}
					data={data?.data}
					textAddButton="AGREGAR PRODUCTOS"
					onAddModal={addModal.onVisibleModal}
				/>
			</MainContentStructure>
			{/* Add Modal */}
			<PrimeModal
				header="Agregar productos"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
			>
				<AddModal postFetchData={postFetchData} />
			</PrimeModal>
		</>
	);
};

const columns = [
	// { nombre: "ID", campo: "id" },
	{ nombre: "Nombre", campo: "name" },
	{ nombre: "Descripción", campo: "description" },
	{ nombre: "Precio", campo: "price" },
	{ nombre: "Cantidad", campo: "stock" },
	{ nombre: "Imagen", campo: "image" },
	{ nombre: "Categoría", campo: "category" },
	{ nombre: "Empresa", campo: "businessId" },
];
