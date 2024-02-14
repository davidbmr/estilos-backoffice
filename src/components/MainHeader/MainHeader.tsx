import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import PersonIcon from "@mui/icons-material/Person";

import { logoutUser } from "../../store/slices/auth/thunks";
import logo from "@/assets/LogoDefault.png";
import style from "./MainHeader.module.css";

import { useAppDispatch } from "@/store/hooks";

export const MainHeader = ({ title = "", actionButton = false }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [menuActive, setMenuActive] = useState(false);

	const handleNavigate = (path: string) => {
		navigate(`/${path}`);
		setMenuActive(false);
	};

	const handleLogout = () => {
		dispatch(logoutUser());
		navigate("/login");
	};

	return (
		<header className={style.mainHeader__container}>
			<div style={{ display: "flex", alignItems: "center", gap: "100px" }}>
				<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
					<div className={style.logo__container}>
						<img src={logo} alt="logo" className={style.logo__item} />
					</div>
				</div>
			</div>

			<div className={style.mainHeader__navbar__container}>
				<div style={{ position: "relative" }}>
					<div className={style.mainHeader__profile} onClick={() => setMenuActive((prev) => !prev)}>
						<PersonIcon />
					</div>
					{menuActive && (
						<div className={style.profileMenu}>
							<ul className={style.profileMenu__list}>
								<li className={style.profileMenu__item} onClick={() => handleNavigate("/")}>
									<IoPersonOutline size={20} /> Mis Datos
								</li>
								<li className={style.profileMenu__item} onClick={handleLogout}>
									<IoLogOutOutline size={20} /> Cerrar Sesión
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};
