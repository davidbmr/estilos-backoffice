import React from "react";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { useNavigate } from "react-router-dom";

export const PaginasInformativas = () => {
	const navigate = useNavigate();
	const {
		data: { data },
		reloadFetchData,
	} = useGetFetch("/admin/page");

	const handleNavigate = (rowData: any) => {
		navigate(`/paginas-informativas/${rowData.slug}`);
	};

	return (
		<>
			<MainContentStructure titleText="Mantenimiento del páginas informativas">
				<DataTable
					columns={columns}
					data={data}
					isSearch={false}
					isExport={false}
					isHeaderActive={false}
					onUpdate={handleNavigate}
				/>
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "Tipo de página", campo: "slug" },
	{ nombre: "Titulo", campo: "name" },
	{ nombre: "Contenido", campo: "content" },
];
