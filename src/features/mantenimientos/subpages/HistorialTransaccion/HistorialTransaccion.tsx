import React, { useEffect, useState } from "react";
import style from "./HistorialTransaccion.module.css";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { ContentBox } from "@/components/ContentBox/ContentBox";
import { SectionStructure } from "@/components/SectionStructure/SectionStructure";
import { SelectField } from "@/components/SelectField/SelectField";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { useGetFetch } from "@/hooks/useGetFetch";

export const HistorialTransaccion = () => {
	// const { data, reloadFetchData } = useGetFetch("/admin/transaction");
	const { data, reloadFetchData } = useGetFetch("/admin/transaction?through=estile-card");

	console.log(data?.data?.transactions);

	return (
		<>
			<MainContentStructure titleText="Transacciones">
				{/* <SectionStructure>
					<ContentBox>
						<div className={style.buscador__container}>
							<SelectField
								textLabel="Seleccione un tipo de transacción:"
								value={""}
								name=""
								onChange={() => {}}
								placeholder=""
								options={[]}
								direction="row"
							/>
							<div className={style.button__container}>
								<CustomButton
									text="Buscar"
									height="50px"
									sizeP="18px"
									backgroundButton="var(--cta-color-3)"
									colorP="#fff"
									onClick={() => ""}
								/>
							</div>
						</div>
					</ContentBox>
				</SectionStructure> */}

				<DataTable columns={columns} data={data?.data?.transactions} isHeaderActive={false} />
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "N° Operación", campo: "uuid" },
	// { nombre: "Tipo de Transacción", campo: "transactionType" },
	// { nombre: "Blockchain id", campo: "blockchainId" },
	{
		nombre: "Cliente",
		body: (rowData: any) => {
			return <>{rowData.sender.firstName}</>;
		},
	},
	{
		nombre: "Apellido Paterno",
		body: (rowData: any) => {
			return <>{rowData.sender.firstName}</>;
		},
	},
	{
		nombre: "DNI del cliente",
		body: (rowData: any) => {
			return <>{rowData.sender.documentNumber}</>;
		},
	},
	{
		nombre: "Receptor",
		body: (rowData: any) => {
			return <>{rowData.receiver.firstName}</>;
		},
	},
	{
		nombre: "Documento del Receptor",
		body: (rowData: any) => {
			return <>{rowData.receiver.documentNumber}</>;
		},
	},
	{ nombre: "Monto", campo: "amount" },
	{ nombre: "Comisión", campo: "comision" },
	{ nombre: "Fecha", campo: "createdAt" },
	// { nombre: "Hora", campo: "hour" },
	// { nombre: "Obs", campo: "obs" },
];
