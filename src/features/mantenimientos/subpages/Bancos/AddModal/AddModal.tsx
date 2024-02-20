import React, { useState } from "react";
import style from "./AddModal.module.css";

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
	const [newData, setNewData] = useState<any>({
		code: "",
		name: "",
		address: "",
		phone: "",
		email: "",
	});

	const handleCreate = async () => {
		postFetchData(newData);
	};

	const handleUpdate = async () => {
		const { id, ...restData } = newData;
		updateFetchData(id, restData);
	};

	// Seteando el estado del input al data si existe el update
	useEffect(() => {
		if (updateData) {
			setNewData(updateData);
		}
	}, [updateData]);

	return (
		<div className={style.column__container}>
			<TextBoxField
				textLabel="Código"
				value={newData.code || ""}
				name="code"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			<TextBoxField
				textLabel="Nombre del banco"
				value={newData.name || ""}
				name="name"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			<TextBoxField
				textLabel="Dirección"
				value={newData.address || ""}
				name="address"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			<TextBoxField
				textLabel="Teléfono"
				value={newData.phone || ""}
				name="phone"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			<TextBoxField
				textLabel="Correo electrónico"
				value={newData.email || ""}
				name="email"
				onChange={(e) => handleChangeInput(e, setNewData)}
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
