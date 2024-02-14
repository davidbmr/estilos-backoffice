import React from "react";
import { useModal } from "@/hooks/useModal";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";

export const CredicashSolicitados = () => {
	const amountModal = useModal();

	return (
		<>
			<MainContentStructure titleText="Credicash solicitados">
				<DataTable
					columns={columns}
					data={data}
					isSearch={true}
					onEye={() => amountModal.onVisibleModal()}
					onDelete={true}
				/>
			</MainContentStructure>

			{/* Add Modal */}
			<PrimeModal
				header="Determinar monto"
				modalStatus={amountModal.modalStatus}
				onHideModal={amountModal.onHideModal}
			>
				<AddModal postFetchData={() => {}} />
			</PrimeModal>
		</>
	);
};

const columns = [
	{ nombre: "Número de operación", campo: "code" },
	{ nombre: "Nombre", campo: "name" },
	{ nombre: "Apellido Paterno", campo: "fatherSurname" },
	{ nombre: "Apellido Materno", campo: "motherSurname" },
	{ nombre: "DNI", campo: "dni" },
	{ nombre: "Departamento", campo: "department" },
	{ nombre: "Celular", campo: "phone" },
	{ nombre: "Correo", campo: "email" },
	{ nombre: "Estado", campo: "status" },
];

const data = [
	{
		code: "00012",
		name: "Alejandro",
		fatherSurname: "Fernández",
		motherSurname: "Montoya",
		dni: "12345678",
		department: "Lima",
		phone: "+51123123123",
		email: "alejandro.fernandez@gmail.com",
		status: "Solicitado",
	},
];
