import React, { useEffect, useState } from "react";
import style from "./AddModal.module.css";

import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { FileUpload } from "primereact/fileupload";
import { SelectField } from "@/components/SelectField/SelectField";

interface PropsAddModal {
	postFetchData?: any;
	updateFetchData?: any;
	updateData?: any;
}

export const AddModal = ({ postFetchData, updateFetchData, updateData }: PropsAddModal) => {
	const [newData, setNewData] = useState<any>({
		name: "",
		banner: null,
		action: "",
		isActive: true,
	});

	const handleCreate = async () => {
		const formData = new FormData();
		Object.entries(newData).forEach(([key, value]) => {
			if (value !== null && value !== undefined) {
				if (value instanceof File) {
					formData.append(key, value);
				} else {
					formData.append(key, String(value));
				}
			}
		});

		postFetchData(formData);
	};

	const handleUpdate = async () => {
		const {id, ...restData} = newData;
		const formData = new FormData();
		Object.entries(restData).forEach(([key, value]) => {
			if (value !== null && value !== undefined) {
				if (value instanceof File) {
					formData.append(key, value);
				} else {
					formData.append(key, String(value));
				}
			}
		});
		updateFetchData(id, formData);
	};

	const handleBannerChange = (e: any) => {
		setNewData({ ...newData, banner: e.files[0] });
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
				textLabel="Nombre del banner"
				value={newData.name || ""}
				name="name"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>

			<SelectField
				value={newData.action}
				name={"action"}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionSelect}
				textLabel="Acción"
			/>

			<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
				<label>Archivo de imagen</label>
				<FileUpload
					mode="basic"
					name="file_field_name"
					accept="image/*"
					maxFileSize={1000000}
					onSelect={handleBannerChange}
					chooseLabel="Cargar imagen"
				/>
			</div>

			{postFetchData && (
				<div>
					<Button className="p-button-sm p-button-info mr-2" onClick={handleCreate}>
						AGREGAR BANNER PRINCIPAL
					</Button>
				</div>
			)}

			{updateFetchData && (
				<div>
					<Button className="p-button-sm p-button-info mr-2" onClick={handleUpdate}>
						EDITAR BANNER PRINCIPAL
					</Button>
				</div>
			)}
		</div>
	);
};

const optionSelect = [
	{ id: 1, name: "Recarga saldo", value: "recharge" },
	{ id: 2, name: "Asociar tarjeta estilos", value: "associate-card" },
	{ id: 3, name: "Solicitar dinero", value: "request" },
];
