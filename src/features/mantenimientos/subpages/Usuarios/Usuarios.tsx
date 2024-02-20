import React from "react";
import { useModal } from "@/hooks/useModal";

import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";
import { usePostFetch } from "@/hooks/usePostFetch";

export const Usuarios = () => {
	const addModal = useModal();

	const { data, reloadFetchData } = useGetFetch("/admin/user?roleId=4");
	const { updateFetchData } = useUpdateFetch("/admin/user", "Usuario", reloadFetchData);
	const { postFetchData } = usePostFetch("/auth/register", "Usuario", reloadFetchData, addModal);

	const handleUpdate = (rowData: any) => {
		updateFetchData(`${rowData.id}/toggle-status`, {});
	};

	return (
		<>
			<MainContentStructure titleText="Usuarios Backoffice">
				<DataTable
					columns={columns}
					data={data?.data}
					// isHeaderActive={false}
					textAddButton="AGREGAR USUARIO"
					onAddModal={addModal.onVisibleModal}
					onDelete={handleUpdate}
				/>
			</MainContentStructure>

			{/* Add Modal */}
			<PrimeModal
				header="Agregar usuario"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
			>
				<AddModal postFetchData={postFetchData} />
			</PrimeModal>
		</>
	);
};

const columns = [
	{ nombre: "Nombre", campo: "firstName" },
	{ nombre: "Apellido Paterno", campo: "lastName" },
	{ nombre: "Apellido Materno", campo: "secondLastName" },
	{ nombre: "Tipo de documento", campo: "documentType" },
	{ nombre: "Número de documento", campo: "documentNumber" },
	{ nombre: "Celular", campo: "cellPhone" },
	{ nombre: "Correo electrónico", campo: "email" },
	{
		nombre: "Activo",
		body: (rowData: any) => {
			return <>{rowData.isActive ? "Habilitado" : "Deshabilitado"}</>;
		},
	},
	// {
	// 	nombre: "Estado",
	// 	body: (rowData: any) => {
	// 		return <>{rowData.is_active ? <p>Activo</p> : <p>Bloqueado</p>}</>;
	// 	},
	// },
	// { nombre: "Departamento", campo: "deparment" },
	// { nombre: "Provincia", campo: "province" },
	// { nombre: "Distrito", campo: "district" },
];
