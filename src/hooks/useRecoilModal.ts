import { useRecoilState } from "recoil";
import { modalState, ModalProps } from "@store/modal";

const useRecoilModal = () => {
	const [modals, setModals] = useRecoilState(modalState);

	const openModal = (props: ModalProps) => {
		const key = Math.random().toString(36).substring(2);
		const nextProps = {
			key,
			close: () => setModals([...modals]),
			...props,
		};
		setModals([...modals].concat(nextProps));
	};

	return { openModal };
};

export default useRecoilModal;
