import React, { useState } from "react";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";

export const Clientes = () => {
	const { data, reloadFetchData } = useGetFetch("/admin/user?roleId=3");

	const { updateFetchData } = useUpdateFetch("/admin/user", "Usuario", reloadFetchData);

	const handleUpdate = (rowData: any) => {
		updateFetchData(`${rowData.id}/toggle-status`, {});
	};

	return (
		<>
			<MainContentStructure titleText="Usuarios Clientes">
				{/* <DataTable columns={columns} data={data} onDelete={handleUpdate} isSearch={true} /> */}
				<DataTable
					columns={columns}
					data={data?.data}
					isHeaderActive={false}
					onDelete={handleUpdate}
				/>
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
	{ nombre: "N. Documento Verificado", campo: "documentNumberVerified" },
	// { nombre: "Status Documento", campo: "documentNumberVerified" },
	{ nombre: "OTP Verificado", campo: "otpVerified" },
	{
		nombre: "Activo",
		body: (rowData: any) => {
			return <>{rowData.isActive ? "Habilitado" : "Deshabilitado"}</>;
		},
	},
];

// "documentNumberVerified": false,
// "documentBackVerified": false,
// "liveness": false,
// "otpVerified": false,
// /admin/user/:id/toggle-status
