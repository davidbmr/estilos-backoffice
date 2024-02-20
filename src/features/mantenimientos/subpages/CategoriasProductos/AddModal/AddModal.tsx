import React, { useEffect, useState } from "react";
import style from "./AddModal.module.css";

import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { FileUpload } from "primereact/fileupload";

interface PropsAddModal {
	postFetchData?: any;
	updateFetchData?: any;
	updateData?: any;
}

export const AddModal = ({ postFetchData, updateFetchData, updateData }: PropsAddModal) => {
	const [newData, setNewData] = useState<any>({
		name: "",
		banner: null,
		url: "",
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
		// console.log(newData);

		postFetchData(formData);
	};

	const handleUpdate = async () => {
		const { id, ...restData } = newData;
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
				textLabel="Nombre"
				value={newData.name || ""}
				name="name"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>

			<TextBoxField
				textLabel="URL"
				value={newData.url || ""}
				name="url"
				onChange={(e) => handleChangeInput(e, setNewData)}
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
						AGREGAR CATEGORÍA
					</Button>
				</div>
			)}

			{updateFetchData && (
				<div>
					<Button className="p-button-sm p-button-info mr-2" onClick={handleUpdate}>
						EDITAR CATEGORÍA
					</Button>
				</div>
			)}
		</div>
	);
};
