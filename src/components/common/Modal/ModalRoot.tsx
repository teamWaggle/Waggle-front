import { useRecoilValue } from "recoil";

import { modalState, scheduleModalState } from "@/recoil/atoms/modal";

import Modal from "./Modal";

const ModalRoot = () => {
	const modals = useRecoilValue(modalState);
	const scheduleModals = useRecoilValue(scheduleModalState);
	return (
		<div id="recoil-modal">
			{modals.map((modal) => (
				<Modal {...modal}></Modal>
			))}
			{scheduleModals.map((modal, index) => {
				const ModalComponent: React.ComponentType = modal.component || (() => null);
				return <ModalComponent key={scheduleModals[index].key} />;
			})}
		</div>
	);
};

export default ModalRoot;
