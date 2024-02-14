import React, { useState } from "react";
import style from "./Dashboard.module.css";

import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";

export function Dashboard() {
	return (
		<MainContentStructure titleText="Dashboard">
			<div className={style.dashboard__container}>
				<div className={style.item}>
					<p className={style.item__title}>Hola Marcelo</p>
					<div>
						<p className={style.item__text}>Inspirational phase</p>
						<p className={style.item__text}>Rentabilidad</p>
						<p className={style.item__text}>S/. 12 745.00</p>
					</div>
					<button className={style.item__button}>Ver resumen</button>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Recargas</p>
					<p className={style.item__text}>S/. 12 745.00</p>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Pagos TC</p>
					<p className={style.item__text}>.</p>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Compras</p>
					<p className={style.item__text}>S/. 12 745.00</p>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Retiros</p>
					<p className={style.item__text}>.</p>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Comisiones Establecimiento</p>
					<p className={style.item__text}>S/. 12 745.00</p>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Comisiones Exchange</p>
					<p className={style.item__text}>.</p>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Rentabilidades</p>
					<p className={style.item__text}>.</p>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Número de Operaciones</p>
					<p className={style.item__text}>.</p>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Últimas Operaciones</p>
					<p className={style.item__text}>.</p>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Top 5 - Establecimientos</p>
					<p className={style.item__text}>.</p>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Top 5 - Clientes</p>
					<p className={style.item__text}>.</p>
				</div>
			</div>
		</MainContentStructure>
	);
}
