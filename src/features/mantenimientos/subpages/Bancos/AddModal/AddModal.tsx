import React, { useState } from "react";
import style from "./AddModal.module.css";

import { BankProps, BankDataProps } from "../types";
import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { useEffect } from "react";

interface PropsAddModal {
	postFetchData?: any;
	updateFetchData?: any;
	updateData?: any;
}

export const AddModal = ({ postFetchData, updateFetchData, updateData }: PropsAddModal) => {
	const [newBank, setNewBank] = useState<BankProps>({
		code: "",
		name: "",
		address: "",
		phone: "",
		email: "",
	});

	const handleCreate = async () => {
		postFetchData(newBank);
	};

	const handleUpdate = async () => {
		console.log(newBank);
	};

	// Seteando el estado del input al data si existe el update
	useEffect(() => {
		if (updateData) {
			setNewBank(updateData);
		}
	}, [updateData]);

	return (
		<div className={style.column__container}>
			<TextBoxField
				textLabel="Código"
				value={newBank.code || ""}
				name="code"
				onChange={(e) => handleChangeInput(e, setNewBank)}
			/>
			<TextBoxField
				textLabel="Nombre del banco"
				value={newBank.name || ""}
				name="name"
				onChange={(e) => handleChangeInput(e, setNewBank)}
			/>
			<TextBoxField
				textLabel="Dirección"
				value={newBank.address || ""}
				name="address"
				onChange={(e) => handleChangeInput(e, setNewBank)}
			/>
			<TextBoxField
				textLabel="Teléfono"
				value={newBank.phone || ""}
				name="phone"
				onChange={(e) => handleChangeInput(e, setNewBank)}
			/>
			<TextBoxField
				textLabel="Correo electrónico"
				value={newBank.email || ""}
				name="email"
				onChange={(e) => handleChangeInput(e, setNewBank)}
			/>

			{postFetchData && (
				<div>
					<Button className="p-button-sm p-button-info mr-2" onClick={handleCreate}>
						AGREGAR BANCO
					</Button>
				</div>
			)}

			{updateFetchData && (
				<div>
					<Button className="p-button-sm p-button-info mr-2" onClick={handleUpdate}>
						EDITAR BANCO
					</Button>
				</div>
			)}
		</div>
	);
};
