import { useRecoilValue } from "recoil";

import { modalState } from "@/store/modal";

import Modal from "./Modal";

const ModalRoot = () => {
	const modals = useRecoilValue(modalState);

	return (
		<div id="recoil-modal">
			{modals.map((modal) => (
				<Modal {...modal}></Modal>
			))}
		</div>
	);
};

export default ModalRoot;
