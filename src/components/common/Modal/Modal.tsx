import { backdropStyle, dialogStyle } from "./Modal.style";

type Props = {
	close?: () => void;
	component?: () => JSX.Element;
};

const Modal = ({ component, close }: Props) => {
	return (
		<>
			<div css={backdropStyle} onClick={close}></div>
			<dialog css={dialogStyle}> {component && component()}</dialog>
		</>
	);
};

export default Modal;
