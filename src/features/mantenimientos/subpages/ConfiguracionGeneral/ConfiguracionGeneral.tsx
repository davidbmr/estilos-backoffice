import React, { useEffect, useState } from "react";
import style from "./ConfiguracionGengeral.module.css";

import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { SectionStructure } from "@/components/SectionStructure/SectionStructure";
import { ContentBox } from "@/components/ContentBox/ContentBox";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";
import { useGetFetch } from "@/hooks/useGetFetch";

export const ConfiguracionGeneral = () => {
	const { updateFetchData } = useUpdateFetch("/admin/config", "Configuración generales");

	const cuotasFetch = useGetFetch("/admin/config/card");
	const favoritosFetch = useGetFetch("/admin/config/contact");
	const limiteEnvioFetch = useGetFetch("/admin/config/limitTransfer");
	const intentosIngresoFetch = useGetFetch("/admin/config/attemptsLimit");

	const [cuotas, setCuotas] = useState<any>({});
	const [favoritos, setFavoritos] = useState<any>({});
	const [limiteEnvio, setLimiteEnvio] = useState<any>({});
	const [intentosIngreso, setIntentosIngreso] = useState<any>({});

	useEffect(() => {
		if (cuotasFetch?.data?.data) {
			setCuotas(cuotasFetch?.data?.data[0]);
		}
	}, [cuotasFetch?.data]);

	useEffect(() => {
		if (favoritosFetch?.data?.data) {
			setFavoritos(favoritosFetch?.data?.data[0]);
		}
	}, [favoritosFetch?.data]);

	useEffect(() => {
		if (limiteEnvioFetch?.data?.data) {
			setLimiteEnvio(limiteEnvioFetch?.data?.data[0]);
		}
	}, [limiteEnvioFetch?.data]);

	useEffect(() => {
		if (intentosIngresoFetch?.data?.data) {
			setIntentosIngreso(intentosIngresoFetch?.data?.data[0]);
		}
	}, [intentosIngresoFetch?.data]);

	const handleUpdateConfig = () => {
		if (cuotas.value != cuotasFetch?.data?.data[0].value) {
			updateFetchData(cuotas.id, cuotas, "put");
		}
		if (favoritos.value != favoritosFetch?.data?.data[0].value) {
			updateFetchData(favoritos.id, favoritos, "put");
		}
		if (limiteEnvio.value != limiteEnvioFetch?.data?.data[0].value) {
			updateFetchData(limiteEnvio.id, limiteEnvio, "put");
		}
		if (intentosIngreso.value != intentosIngresoFetch?.data?.data[0].value) {
			updateFetchData(intentosIngreso.id, intentosIngreso, "put");
		}
	};

	// const handleChange
	return (
		<>
			<MainContentStructure titleText="Configuraciones generales">
				<SectionStructure>
					<ContentBox>
						<div className={style.data__container}>
							<div className={style.one_column}>
								<TextBoxField
									direction="row"
									textLabel="Cant. de intentos para la clave de ingreso:"
									value={intentosIngreso?.value || ""}
									name=""
									onChange={(e) =>
										setIntentosIngreso({ ...intentosIngreso, value: e.target.value })
									}
									labelWidth="200px"
								/>
								<TextBoxField
									direction="row"
									textLabel="Cant. de contactos favoritos:"
									value={favoritos?.value || ""}
									name=""
									onChange={(e) => setFavoritos({ ...favoritos, value: e.target.value })}
									labelWidth="200px"
								/>
							</div>
							<div className={style.one_column}>
								<TextBoxField
									direction="row"
									textLabel="Cant. máximo de envio de dinero:"
									value={limiteEnvio?.value || ""}
									name=""
									onChange={(e) => setLimiteEnvio({ ...limiteEnvio, value: e.target.value })}
									labelWidth="200px"
								/>
								<TextBoxField
									direction="row"
									textLabel="Cant. de cuotas parametrizables:"
									value={cuotas?.value || ""}
									name=""
									onChange={(e) => setCuotas({ ...cuotas, value: e.target.value })}
									labelWidth="200px"
								/>
							</div>
						</div>
						<div className={style.button__container}>
							<CustomButton
								text="Guardar"
								height="50px"
								sizeP="18px"
								backgroundButton="var(--cta-color-3)"
								colorP="#fff"
								onClick={handleUpdateConfig}
							/>
						</div>
					</ContentBox>
				</SectionStructure>
			</MainContentStructure>
		</>
	);
};
