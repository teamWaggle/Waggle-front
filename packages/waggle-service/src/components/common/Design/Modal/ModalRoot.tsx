import { useRecoilValue } from "recoil";

import Modal from "./Modal";

import { modalState } from "@/recoil/atoms/modal";

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
