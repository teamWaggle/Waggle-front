import { Box } from "@/components/common";
import { alertModalConfirmButtonStyle } from "@/components/common/AlertModal/AlertModal.style";
import type { HTMLAttributes } from "react";

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
