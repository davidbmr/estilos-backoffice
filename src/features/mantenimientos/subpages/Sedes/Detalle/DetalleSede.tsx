import React from "react";
import style from "./DetalleSede.module.css";
import { ContentBox } from "@/components/ContentBox/ContentBox";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { SectionStructure } from "@/components/SectionStructure/SectionStructure";
import { useGetFetch } from "@/hooks/useGetFetch";
import { useParams } from "react-router-dom";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { useModal } from "@/hooks/useModal";
import { PosModal } from "../PosModal/PosModal";
import { usePostFetch } from "@/hooks/usePostFetch";

export const DetalleSede = () => {
	const { id } = useParams();
	const posModal = useModal();
	const { data, reloadFetchData } = useGetFetch(`/admin/location/general/${id}`);
	const { postFetchData } = usePostFetch("/auth/register", "POS", reloadFetchData, posModal);
	const { updateFetchData } = useUpdateFetch(
		"/admin/location/general/active",
		"Sedes",
		reloadFetchData
	);

	const onActiveEstablishment = () => {
		updateFetchData(id, { isActive: true });
	};

	const onDesactiveEstablishment = () => {
		updateFetchData(id, { isActive: false });
	};

	return (
		<>
			<MainContentStructure titleText="Detalle de la Sede">
				<SectionStructure>
					<div className={style.detalle__container}>
						<p className={style.title__name}>Sede {data?.data?.businessName}</p>
						<p className={style.textActive}>
							{data?.data?.isActive ? "Habilitado" : "Deshabilitado"}
						</p>
						<div className={style.contentBox__container}>
							<ContentBox>
								<div className={style.info__container}>
									<p className={style.subtitle__name}>Información de la sede:</p>
									<div className={style.box__item}>
										<p className={style.title__item}>Nombre:</p>
										<p className={style.text__item}>{data?.data?.name}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Dirección:</p>
										<p className={style.text__item}>{data?.data?.address}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Departamento:</p>
										<p className={style.text__item}>{data?.data?.department.name}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Provincia:</p>
										<p className={style.text__item}>{data?.data?.province.name}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Distrito:</p>
										<p className={style.text__item}>{data?.data?.district.name}</p>
									</div>
								</div>
							</ContentBox>
							<ContentBox>
								<div className={style.info__container}>
									<p className={style.subtitle__name}>Información del establecimiento:</p>

									<div className={style.box__item}>
										<p className={style.title__item}>Nombre del establecimiento:</p>
										<p className={style.text__item}>{data?.data?.business?.businessName}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Nombre comercial:</p>
										<p className={style.text__item}>{data?.data?.business?.tradeName}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Descripción del destablecimiento:</p>
										<p className={style.text__item}>
											{data?.data?.business?.establishmentDescription}
										</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>Industria:</p>
										<p className={style.text__item}>{data?.data?.business?.industry}</p>
									</div>
									<div className={style.box__item}>
										<p className={style.title__item}>RUC:</p>
										<p className={style.text__item}>{data?.data?.business?.ruc}</p>
									</div>
								</div>
							</ContentBox>
						</div>

						{/* <ContentBox>
							<p className={style.subtitle__name}>POS:</p>
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
						</ContentBox> */}

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
							<div className={style.button__container}>
								<CustomButton
									text="Agregar POS"
									height="50px"
									sizeP="18px"
									backgroundButton="var(--cta-color-3)"
									colorP="#fff"
									onClick={posModal.onVisibleModal}
								/>
							</div>
						</div>
					</div>
				</SectionStructure>
			</MainContentStructure>

			{/* POS Modal */}
			<PrimeModal
				header="Agregar pos"
				modalStatus={posModal.modalStatus}
				onHideModal={posModal.onHideModal}
			>
				<PosModal postFetchData={postFetchData} idLocation={id} />
			</PrimeModal>
		</>
	);
};
