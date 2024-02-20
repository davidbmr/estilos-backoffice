import React from "react";
import style from "./VisibleModal.module.css";

interface Props {
	img?: any;
}
export const VisibleModal = ({ img }: Props) => {
	return (
		<div className={style.visibleModal__container}>
			<img className={style.visibleModal__img} src={img} alt="imagen del banner" />
		</div>
	);
};
