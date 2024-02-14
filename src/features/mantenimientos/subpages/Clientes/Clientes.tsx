import React from "react";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";

export const Clientes = () => {
	const { data, reloadFetchData } = useGetFetch("/admin/user?roleId=3");

	const { updateFetchData } = useUpdateFetch("/admin/users", "Usuario", reloadFetchData);

	const handleUpdate = (rowData: any) => {
		updateFetchData(rowData._id, {
			is_active: !rowData.is_active,
		});
	};

	return (
		<>
			<MainContentStructure titleText="Usuarios Clientes">
				{/* <DataTable columns={columns} data={data} onDelete={handleUpdate} isSearch={true} /> */}
				<DataTable columns={columns} data={data?.data} isHeaderActive={false} />
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "Nombre", campo: "firstName" },
	{ nombre: "Apellido Paterno", campo: "lastName" },
	// { nombre: "Apellido Materno", campo: "middle_name" },
	{ nombre: "Tipo de documento", campo: "documentType" },
	{ nombre: "Número de documento", campo: "documentNumber" },
	// { nombre: "Celular", campo: "phone" },
	{ nombre: "Correo electrónico", campo: "email" },
	// {
	// 	nombre: "Estado",
	// 	body: (rowData: any) => {
	// 		return <>{rowData.isActive ? <p>Activo</p> : <p>Bloqueado</p>}</>;
	// 	},
	// },
];
