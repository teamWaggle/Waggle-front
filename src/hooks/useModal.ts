import { useCallback } from "react";

import { useSetRecoilState, useRecoilState } from "recoil";

import { modalState, scheduleModalState } from "@/recoil/atoms/modal";

import type { ModalType } from "@/types/modal";

const useModal = () => {
	const [modals, setModals] = useRecoilState(modalState);
	const setScheduleModals = useSetRecoilState(scheduleModalState);

	const openModal = useCallback(
		({ key, component, notCloseIcon, isWhiteIcon, isUpper }: ModalType) => {
			const modalProps = {
				key,
				close: () => setModals([]),
				component,
				notCloseIcon,
				isWhiteIcon,
				isUpper,
			};

			setModals((prev) => [...prev, modalProps]);
		},
		[setModals],
	);

	const selectCloseModal = useCallback(
		(key?: string) => {
			setModals(modals.filter((prev) => prev.key !== key));
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

	return { openModal, closeModal, openScheduleModal, closeScheduleModal, selectCloseModal };
};

export default useModal;
