import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

import { backdropStyle, dialogStyle } from "@components/common/Modal/Modal.style";

export interface ModalProps {
	isOpen: boolean;
	isBackdropClosable?: boolean;
	closeModal: () => void;
	children: React.ReactNode;
}

const Modal = ({
	closeModal,
	isOpen = false,
	isBackdropClosable = true,
	children,
	...attributes
}: ModalProps) => {
	const handleEscKeyPress = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === "Escape" && isBackdropClosable) {
				closeModal();
			}
		},
		[closeModal],
	);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleEscKeyPress);
		}

		return () => {
			document.body.style.overflow = "auto";
			window.removeEventListener("keydown", handleEscKeyPress);
		};
	}, [isOpen, handleEscKeyPress]);

	return createPortal(
		<>
			{isOpen && (
				<>
					<div css={backdropStyle} onClick={() => closeModal()} />
					<dialog aria-modal={isOpen} css={dialogStyle} {...attributes}>
						{children}
					</dialog>
				</>
			)}
		</>,
		document.body,
	);
};

export default Modal;
