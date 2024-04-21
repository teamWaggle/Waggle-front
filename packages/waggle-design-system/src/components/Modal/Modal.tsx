import type { ComponentPropsWithoutRef } from "react";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

import CloseIcon from "@/assets/svg/ic-close-modal.svg?react";

import { backdropStyle, dialogStyle, closeButtonStyling } from "@/components/Modal/Modal.style";

export interface ModalProps extends ComponentPropsWithoutRef<"dialog"> {
  isOpen: boolean;
  hasCloseButton?: boolean;
  isOutsideClose?: boolean;
  isWhiteIcon?: boolean;
  isUpper?: boolean;
  closeModal: () => void;
}

const Modal = ({
  isOpen = false,
  hasCloseButton = true,
  isOutsideClose = true,
  isWhiteIcon = false,
  isUpper = false,
  closeModal,
  children,
  ...attributes
}: ModalProps) => {
  const handleEscKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOutsideClose) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscKeyPress);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen, handleEscKeyPress]);

  return createPortal(
    <>
      {isOpen && (
        <>
          <div css={backdropStyle(isUpper)} onClick={isOutsideClose ? closeModal : undefined} />
          <dialog aria-modal={isOpen} css={dialogStyle(isUpper)} {...attributes}>
            {hasCloseButton && (
              <button
                type="button"
                aria-label="모달 닫기 버튼"
                onClick={closeModal}
                css={closeButtonStyling(isWhiteIcon)}
              >
                <CloseIcon />
              </button>
            )}
            {children}
          </dialog>
        </>
      )}
    </>,
    document.body
  );
};

export default Modal;
