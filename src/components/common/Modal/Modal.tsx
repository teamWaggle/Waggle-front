import { useEffect, useCallback } from "react";

import { useRecoilValue } from "recoil";

import { modalState } from "@/store/modal";

import { backdropStyle, dialogStyle } from "./Modal.style";

type Props = {
	close?: () => void;
	component?: () => JSX.Element;
};

const Modal = ({ component, close }: Props) => {
	const modals = useRecoilValue(modalState);

	const handleEscKeyPress = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === "Escape" && close) {
				close();
			}
		},
		[close],
	);

	useEffect(() => {
		if (modals.length) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleEscKeyPress);
		}

		return () => {
			document.body.style.overflow = "auto";
			window.removeEventListener("keydown", handleEscKeyPress);
		};
	}, [modals.length, handleEscKeyPress]);

	return (
		<>
			<div css={backdropStyle} onClick={close}></div>
			<dialog css={dialogStyle}> {component && component()}</dialog>
		</>
	);
};

export default Modal;
