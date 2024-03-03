import { useCallback } from "react";

import { useSetRecoilState } from "recoil";

import { modalState, scheduleModalState } from "@/recoil/atoms/modal";

import type { ModalType } from "@/types/modal";

const useModal = () => {
	const setModals = useSetRecoilState(modalState);
	const setScheduleModals = useSetRecoilState(scheduleModalState);

	const openModal = useCallback(
		({ key, component, notCloseIcon, isWhiteIcon }: ModalType) => {
			const modalProps = {
				key,
				close: () => setModals([]),
				component,
				notCloseIcon,
				isWhiteIcon,
			};

			setModals((prev) => [...prev, modalProps]);
		},
		[setModals],
	);

	const closeModal = useCallback(() => {
		setModals([]);
	}, [setModals]);

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
