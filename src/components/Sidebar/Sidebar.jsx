import React from "react";
import { List, Divider } from "@mui/material";
import SidebarItem from "./SidebarItem";
import style from "./Sidebar.module.css";

const Sidebar = ({ appRoutes }) => {
	return (
		<div className={style.container__drawer}>
			<List disablePadding>
				{appRoutes.map((route, index) => {
					if (route.group) {
						return (
							<React.Fragment key={index}>
								<div className={style.group}>{route.groupName}</div>
								{route.routes.map((childRoute, childIndex) => (
									<React.Fragment key={childIndex}>
										<SidebarItem item={childRoute} />
									</React.Fragment>
								))}
							</React.Fragment>
						);
					} else {
						return (
							<React.Fragment key={index}>
								<SidebarItem item={route} />
							</React.Fragment>
						);
					}
				})}
			</List>
		</div>
	);
};

export default Sidebar;
