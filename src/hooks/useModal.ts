import { useRecoilState } from "recoil";

import { modalState } from "@/store/modal";
import { ModalType } from "@/types/modal";

const useModal = () => {
	const [modals, setModals] = useRecoilState(modalState);

	const openModal = ({ key, component }: ModalType) => {
		const modalProps = {
			key,
			close: () => setModals([]),
			component,
		};

		setModals([...modals].concat(modalProps));
	};

	const closeModal = () => {
		setModals([]);
	};

	return { openModal, closeModal };
};

export default useModal;
