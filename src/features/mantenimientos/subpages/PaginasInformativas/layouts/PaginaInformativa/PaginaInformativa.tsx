import React, { useEffect, useState } from "react";
import style from "./PaginaInformativa.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useLocation, useNavigate } from "react-router-dom";
import { Editor } from "primereact/editor";

import { SectionStructure } from "@/components/SectionStructure/SectionStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";

export const PaginaInformativa = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const partesDeLaURL = pathname.split("/");
	const slug = partesDeLaURL[partesDeLaURL.length - 1];

	const { data, reloadFetchData } = useGetFetch(`/admin/page/${slug}`);
	const { updateFetchData } = useUpdateFetch(`/admin/page`, "Página", reloadFetchData);

	const [text, setText] = useState(data?.data?.content);

	const updatePage = () => {
		const newData = {
			name: data?.data.name,
			content: text,
			pageType: slug,
		};
		updateFetchData(slug, newData, "put");

		setTimeout(() => {
			navigate("/paginas-informativas");
		}, 1500);
	};

	useEffect(() => {
		if (data?.status == 200) {
			setText(data?.data.content);
		}
	}, [data]);

	return (
		<MainContentStructure titleText={`Contenido de ${slug}`}>
			<SectionStructure>
				{text ? (
					<Editor
						value={text}
						onTextChange={(e: any) => setText(e.htmlValue)}
						style={{ height: "320px" }}
					/>
				) : (
					<></>
				)}

				<CustomButton
					text="EDITAR PÁGINA"
					height="50px"
					sizeP="16px"
					backgroundButton="var(--cta-color-3)"
					colorP="#fff"
					onClick={updatePage}
				/>
			</SectionStructure>
		</MainContentStructure>
	);
};
