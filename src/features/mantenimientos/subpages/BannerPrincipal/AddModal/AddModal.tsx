import React, { useState } from "react";
import style from "./AddModal.module.css";

import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";

interface PropsAddModal {
	postFetchData?: any;
	updateFetchData?: any;
	updateData?: any;
}

export const AddModal = ({ postFetchData, updateFetchData, updateData }: PropsAddModal) => {
	const [newData, setNewData] = useState<any>({
		name: "",
		nameUrl: "",
	});

	const handleCreate = async () => {
		postFetchData(newData)
	};

	const handleUpdate = async () => {
		updateFetchData(newData)
	}

	return (
		<div className={style.column__container}>
			<TextBoxField
				textLabel="Nombre del banner"
				value={newData.name || ""}
				name="name"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			<TextBoxField
				textLabel="URL"
				value={newData.nameUrl || ""}
				name="nameUrl"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>

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
