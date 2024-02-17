import { useSetRecoilState } from "recoil";

import { modalState, scheduleModalState } from "@/recoil/atoms/modal";
import { ModalType } from "@/types/modal";

const useModal = () => {
	const setModals = useSetRecoilState(modalState);
	const setScheduleModals = useSetRecoilState(scheduleModalState);
	const openModal = ({ key, component }: ModalType) => {
		const modalProps = {
			key,
			close: () => setModals([]),
			component,
		};

		setModals((prev) => [...prev, modalProps]);
	};

	const closeModal = () => {
		setModals([]);
	};

	const openScheduleModal = ({ key, component }: ModalType) => {
		const modalProps = {
			key,
			close: () => setScheduleModals([]),
			component,
		};

		setScheduleModals([modalProps]);
	};

	const closeScheduleModal = () => {
		setScheduleModals([]);
	};

	return { openModal, closeModal, openScheduleModal, closeScheduleModal };
};

export default useModal;
