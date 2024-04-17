import { optionModalList } from "@/components/common/OptionModal/OptionModal.style";
import useClickOutSide from "@/hooks/useClickOutSide";
import { createContext, useRef } from "react";

export const OptionModalContext = createContext<{ closeModal: () => void }>({
  closeModal: () => {},
});

const OptionModal = ({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutSide(modalRef, closeModal);
  const handleOptionModalClick = () => {
    closeModal();
  };
  return (
    <div ref={modalRef} css={optionModalList} onClick={handleOptionModalClick}>
      {children}
    </div>
  );
};
export default OptionModal;
