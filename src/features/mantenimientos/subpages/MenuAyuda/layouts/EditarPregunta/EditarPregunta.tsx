import React, { useEffect, useState } from "react";
import style from "./PaginaInformativa.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useLocation, useNavigate } from "react-router-dom";
import { Editor } from "primereact/editor";

import { SectionStructure } from "@/components/SectionStructure/SectionStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { Button } from "@mui/material";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";

export const EditarPregunta = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const partesDeLaURL = pathname.split("/");
	const slug = partesDeLaURL[partesDeLaURL.length - 1];

	const { data, reloadFetchData } = useGetFetch(`/admin/pages/${slug}`);
	const { updateFetchData } = useUpdateFetch(`/admin/pages/`, "Página", reloadFetchData);

	const [text, setText] = useState("");

	const updatePage = () => {
		const newData = {
			title: data?.data.title,
			body: text,
			pageType: slug,
		};
		updateFetchData(slug, newData);

		setTimeout(() => {
			navigate("/paginas-informativas");
		}, 1500);
	};

	useEffect(() => {
		if (data?.data) {
			setText(data?.data.body);
		}
	}, [data]);

	return (
		<MainContentStructure titleText={`Contenido de ${slug}`}>
			<SectionStructure>
				<Editor
					value={text}
					onTextChange={(e: any) => setText(e.htmlValue)}
					style={{ height: "320px" }}
				/>

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
