import React from "react";
import style from "./DetalleEstablecimiento.module.css";
import { ContentBox } from "@/components/ContentBox/ContentBox";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { SectionStructure } from "@/components/SectionStructure/SectionStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";

export const DetalleEstablecimiento = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { data, reloadFetchData } = useGetFetch(`/admin/establishment/${id}`);
	const { updateFetchData } = useUpdateFetch(
		"/admin/establishment",
		"Establecimiento",
		reloadFetchData
	);

	const onActiveEstablishment = () => {
		updateFetchData(id, { isActive: true });
	};

	const onDesactiveEstablishment = () => {
		updateFetchData(id, { isActive: false });
	};
	console.log(data?.data?.locations);

	return (
		<>
			<MainContentStructure titleText="Detalle de Establecimiento">
				<SectionStructure>
					<div className={style.detalle__container}>
						<p className={style.title__name}>Establecimiento {data?.data?.businessName}</p>
						<p className={style.textActive}>
							{data?.data?.isActive ? "Habilitado" : "Deshabilitado"}
						</p>
						<div className={style.contentBox__container}>
							<ContentBox>
								<div className={style.info__container}>
									<p className={style.subtitle__name}>Información del establecimiento:</p>
									<div className={style.box__item}>
										<p className={style.title__item}>Nombre:</p>
										<p className={style.text__item}>{data?.data?.businessName}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Nombre Comercial:</p>
										<p className={style.text__item}>{data?.data?.tradeName}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Industria:</p>
										<p className={style.text__item}>{data?.data?.industry}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>RUC:</p>
										<p className={style.text__item}>{data?.data?.ruc}</p>
									</div>
								</div>
							</ContentBox>
							<ContentBox>
								<div className={style.info__container}>
									<p className={style.subtitle__name}>Información del usuario:</p>
									<div className={style.box__item}>
										<p className={style.title__item}>Usuario:</p>
										<p className={style.text__item}>{data?.data?.user?.firstName}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Apellido:</p>
										<p className={style.text__item}>{data?.data?.user?.lastName}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Correo:</p>
										<p className={style.text__item}>{data?.data?.user?.email}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Celular:</p>
										<p className={style.text__item}>{data?.data?.user?.cellPhone}</p>
									</div>
								</div>
							</ContentBox>
						</div>

						<ContentBox>
							<p className={style.subtitle__name}>Sedes:</p>
							{data?.data?.locations &&
								data?.data?.locations.map((item: any) => (
									<ContentBox
										key={item.id}
										backgroundActive
										additionalClassName={style.box__container__sede}
									>
										<div>
											<p>
												<b>Nombre:</b> {item.name}
											</p>
											<p>
												<b>Dirección:</b> {item.address}
											</p>
											<p>
												<b>Longitud:</b> {item.longitude}
											</p>
											<p>
												<b>Latitud:</b> {item.latitude}
											</p>
										</div>
										<CustomButton
											text="Ver detalle"
											height="40px"
											sizeP="16px"
											backgroundButton="var(--cta-color-3)"
											colorP="#fff"
											onClick={() => navigate(`/sedes/detalle/${item.id}`)}
										/>
									</ContentBox>
								))}
						</ContentBox>

						<div className={style.button__box}>
							<div className={style.button__container}>
								<CustomButton
									text="Habilitar"
									height="50px"
									sizeP="18px"
									backgroundButton="var(--cta-color-3)"
									colorP="#fff"
									onClick={onActiveEstablishment}
								/>
							</div>
							<div className={style.button__container}>
								<CustomButton
									text="Deshabilitar"
									height="50px"
									sizeP="18px"
									backgroundButton="var(--cta-color-3)"
									colorP="#fff"
									onClick={onDesactiveEstablishment}
								/>
							</div>
						</div>
					</div>
				</SectionStructure>
			</MainContentStructure>
		</>
	);
};
