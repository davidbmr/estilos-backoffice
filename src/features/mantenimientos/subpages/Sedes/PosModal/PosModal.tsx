import React, { useState } from "react";
import style from "./PosModal.module.css";

import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";

interface Props {
	postFetchData?: any;
	updateFetchData?: any;
	updateData?: any;
	idLocation?: any;
}

export const PosModal = ({ postFetchData, updateFetchData, updateData, idLocation }: Props) => {
	const [newData, setNewData] = useState<any>({
		firstName: "",
		middleName: "segundo nombre",
		lastName: "",
		secondLastName: "",
		birthdate: "12-12-1994",
		avatar: "https://example.com/avatar.jpg",
		documentType: "dni",
		documentNumber: "",
		cellPhone: "",
		email: "",
		termsAndConditions: true,
		dataPrivacy: true,
		electronicMoneyContract: true,
		offersAndDiscounts: true,
		password: "",
		role: "pos",
		department: 1,
		province: 1,
		district: 1,
		idLocation: idLocation,
	});

	const handleCreate = async () => {
		postFetchData(newData);
	};

	const handleUpdate = async () => {
		console.log(newData);
	};

	return (
		<div className={style.column__container}>
			{/* <SelectField
        textLabel="Seleccione un rol:"
        value={newData.role}
        name="role"
        placeholder="Selecciona un rol"
        options={rolesOptions}
        onChange={(e) => handleChangeInput(e, setNewData)}
      /> */}
			<TextBoxField
				textLabel="Nombre:"
				value={newData.firstName || ""}
				name="firstName"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			<TextBoxField
				textLabel="Apellido Paterno:"
				value={newData.lastName || ""}
				name="lastName"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			<TextBoxField
				textLabel="Apellido Materno:"
				value={newData.secondLastName || ""}
				name="secondLastName"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			{/* <SelectField
        textLabel="Tipo de documento:"
        value={newData.documentType}
        name="documentType"
        placeholder="Selecciona un tipo de doc."
        options={typeDocumentsOptions}
        onChange={(e) => handleChangeInput(e, setNewData)}
      /> */}
			<TextBoxField
				textLabel="Número de documento:"
				value={newData.documentNumber || ""}
				name="documentNumber"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			<TextBoxField
				textLabel="Celular:"
				value={newData.cellPhone || ""}
				name="cellPhone"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			<TextBoxField
				textLabel="Correo:"
				value={newData.email || ""}
				name="email"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			<TextBoxField
				textLabel="Contraseña:"
				type="password"
				value={newData.password || ""}
				name="password"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>

			{postFetchData && (
				<div>
					<Button className="p-button-sm p-button-info mr-2" onClick={handleCreate}>
						AGREGAR USUARIO
					</Button>
				</div>
			)}

			{updateFetchData && (
				<div>
					<Button className="p-button-sm p-button-info mr-2" onClick={handleUpdate}>
						EDITAR USUARIO
					</Button>
				</div>
			)}
		</div>
	);
};

const rolesOptions = [
	{ id: 1, name: "superadmin" },
	{ id: 2, name: "admin" },
	{ id: 3, name: "atm" },
];

const typeDocumentsOptions = [
	{ id: 1, name: "DNI" },
	{ id: 2, name: "CIF" },
];
