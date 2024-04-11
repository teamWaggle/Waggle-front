import { useEffect, useCallback } from "react";

import { useRecoilValue } from "recoil";

import CloseIcon from "@/assets/svg/CloseIcon.svg?react";

import { modalState } from "@/recoil/atoms/modal";

import type { ModalType } from "@/types/modal";

import {
  backdropStyle,
  dialogStyle,
  closeButtonStyling,
} from "@/components/common/Design/Modal/Modal.style";

const Modal = ({
  component,
  close,
  notCloseIcon,
  isWhiteIcon,
  isUpper,
  isOutsideClose = true,
}: ModalType) => {
  const modals = useRecoilValue(modalState);

  const handleEscKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && close) {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (modals.length) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscKeyPress);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [modals.length, handleEscKeyPress]);

  return (
    <>
      <div css={backdropStyle(isUpper)} onClick={isOutsideClose ? close : undefined} />
      <dialog css={dialogStyle(isUpper)}>
        {component && component()}
        {!notCloseIcon && <CloseIcon css={closeButtonStyling(isWhiteIcon)} onClick={close} />}
      </dialog>
    </>
  );
};

export default Modal;
