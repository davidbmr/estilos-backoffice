import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import Sidebar from "../components/Sidebar/Sidebar";
import { MainHeader } from "../components/MainHeader/MainHeader";
import { AppStructure } from "../components/AppStructure/AppStructure";
import { appRoutesMantenimientos } from "@/data/Rutas";

// submenu
import { Mantenimientos } from "../features/mantenimientos/pages/Mantenimientos";
import { Usuarios } from "@/features/mantenimientos/subpages/Usuarios/Usuarios";
import { Sedes } from "@/features/mantenimientos/subpages/Sedes/Sedes";
import { GestionRoles } from "@/features/mantenimientos/subpages/GestionRoles/GestionRoles";
import { CategoriasProductos } from "@/features/mantenimientos/subpages/CategoriasProductos/CategoriasProducto";
import { Promociones } from "@/features/mantenimientos/subpages/Promociones/Promociones";
import { Reportes } from "@/features/mantenimientos/subpages/Reportes/Reportes";
import { Tokens } from "@/features/mantenimientos/subpages/Tokens/Tokens";
import { Monedas } from "@/features/mantenimientos/subpages/Monedas/Monedas";
import { HistorialUso } from "@/features/mantenimientos/subpages/HistorialUso/HistorialUso";
import { Bancos } from "@/features/mantenimientos/subpages/Bancos/Bancos";
import { Departamentos } from "@/features/mantenimientos/subpages/Departamentos/Departamentos";
import { Provincias } from "@/features/mantenimientos/subpages/Provincias/Provincias";
import { Distritos } from "@/features/mantenimientos/subpages/Distritos/Distritos";
import { Dashboard } from "@/features/mantenimientos/subpages/Dashboard/Dashboard";
import { MenuAyuda } from "@/features/mantenimientos/subpages/MenuAyuda/MenuAyuda";
import { Rubro } from "@/features/mantenimientos/subpages/Rubro/Rubro";
import { Clientes } from "@/features/mantenimientos/subpages/Clientes/Clientes";
import { ConfiguracionGeneral } from "@/features/mantenimientos/subpages/ConfiguracionGeneral/ConfiguracionGeneral";
import { TarjetasSolicitadas } from "@/features/mantenimientos/subpages/TarjetasSolicitadas/TarjetasSolicitadas";
import { CredicashSolicitados } from "@/features/mantenimientos/subpages/CredicashSolicitados/CredicashSolicitados";
import { RecargaBilletera } from "@/features/mantenimientos/subpages/RecargaBilletera/RecargaBilletera";
import { HistorialTransaccion } from "@/features/mantenimientos/subpages/HistorialTransaccion/HistorialTransaccion";
import { LogFallas } from "@/features/mantenimientos/subpages/LogFallas/LogFallas";
import { Producto } from "@/features/mantenimientos/subpages/Productos/Productos";
import { PaginasInformativas } from "@/features/mantenimientos/subpages/PaginasInformativas/PaginasInformativas";
import { PaginaInformativa } from "@/features/mantenimientos/subpages/PaginasInformativas/layouts/PaginaInformativa/PaginaInformativa";
import { EditarPregunta } from "@/features/mantenimientos/subpages/MenuAyuda/layouts/EditarPregunta/EditarPregunta";
import { BannerPrincipal } from "@/features/mantenimientos/subpages/BannerPrincipal/BannerPrincipal";
import { Establecimientos } from "@/features/mantenimientos/subpages/Establecimientos/Establecimientos";
import { DetalleEstablecimiento } from "@/features/mantenimientos/subpages/Establecimientos/Detalle/DetalleEstablecimiento";
import { DetalleSede } from "@/features/mantenimientos/subpages/Sedes/Detalle/DetalleSede";

export const AppRoutesMantenimientos = () => {
	return (
		<AppStructure>
			<MainHeader />
			<div className={style.mainContent__container}>
				<Sidebar appRoutes={appRoutesMantenimientos} />

				<Routes>
					<Route path="/" element={<Mantenimientos />} />
					<Route path="/dashboard" element={<Dashboard />} />

					<Route path="/clientes" element={<Clientes />} />

					<Route path="/usuarios" element={<Usuarios />} />
					<Route path="/establecimientos" element={<Establecimientos />} />
					<Route path="/establecimiento/detalle/:id" element={<DetalleEstablecimiento/>}/>
					<Route path="/sedes" element={<Sedes />} />
					<Route path="/sedes/detalle/:id" element={<DetalleSede />} />
					<Route path="/lista-roles" element={<GestionRoles />} />

					<Route path="/reportes" element={<Reportes />} />
					<Route path="/tokens" element={<Tokens />} />
					<Route path="/monedas" element={<Monedas />} />
					<Route path="/historial-uso" element={<HistorialUso />} />
					<Route path="/transaccion" element={<HistorialTransaccion />} />

					<Route path="/bancos" element={<Bancos />} />
					<Route path="/departamentos" element={<Departamentos />} />
					<Route path="/provincias" element={<Provincias />} />
					<Route path="/distritos" element={<Distritos />} />

					<Route path="/menu-ayuda" element={<MenuAyuda />} />
					<Route path="/menu-ayuda/:slug" element={<EditarPregunta />} />
					<Route path="/categoria" element={<CategoriasProductos />} />
					<Route path="/rubro" element={<Rubro />} />

					<Route path="/configuracion-general" element={<ConfiguracionGeneral />} />
					<Route path="/banner-principal" element={<BannerPrincipal />} />
					<Route path="/bancos" element={<Bancos />} />

					<Route path="/tarjetas-vinculadas" element={<TarjetasSolicitadas />} />
					<Route path="/credicash-solicitados" element={<CredicashSolicitados />} />
					<Route path="/recarga-billetera" element={<RecargaBilletera />} />

					<Route path="/log-fallas" element={<LogFallas />} />

					<Route path="/productos" element={<Producto />} />
					<Route path="/promociones" element={<Promociones />} />
					<Route path="/paginas-informativas" element={<PaginasInformativas />} />
					<Route path="/paginas-informativas/:slug" element={<PaginaInformativa />} />

					<Route path="/*" element={<Navigate to="/" />} />
				</Routes>
			</div>
		</AppStructure>
	);
};
