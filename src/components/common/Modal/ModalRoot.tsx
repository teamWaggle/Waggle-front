import Modal from "./Modal";
import { useRecoilValue } from "recoil";
import { modalState } from "@store/modal";

const RecoilModalRoot = () => {
	const modals = useRecoilValue(modalState);
	return (
		<div id="recoil-modal">
			{modals.map((modal) => (
				<Modal key={modal.key} {...modal}></Modal>
			))}
		</div>
	);
};

export default RecoilModalRoot;
