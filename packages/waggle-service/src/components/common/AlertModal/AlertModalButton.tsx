import type { HTMLAttributes } from "react";

import { Box } from "waggle-design-system";

import { alertModalConfirmButtonStyle } from "@/components/common/AlertModal/AlertModal.style";

interface AlertModalButtonProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  isConfirm?: boolean;
}
const AlertModalButton = ({ text, isConfirm = false, ...props }: AlertModalButtonProps) => {
  return (
    <Box {...props} css={alertModalConfirmButtonStyle(isConfirm)}>
      {text}
    </Box>
  );
};
export default AlertModalButton;
