import React, { useState, useEffect } from "react";
import style from "./AddModal.module.css";

import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";

interface PropsAddModal {
	postFetchData?: any;
	updateFetchData?: any;
	updateData?: any;
}

export const AddModal = ({ postFetchData, updateData }: PropsAddModal) => {
	const [newData, setNewData] = useState<any>({
		amount: "",
	});

	const handleCreate = async () => {
		console.log(newData);
	};

	const handleUpdate = async () => {
		console.log(newData);
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
				textLabel="Monto para el crédito:"
				type="number"
				value={newData.amount || ""}
				name="amount"
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>

			{postFetchData && (
				<div>
					<Button className="p-button-sm p-button-info mr-2" onClick={handleCreate}>
						DETERMINAR MONTO
					</Button>
				</div>
			)}
		</div>
	);
};
