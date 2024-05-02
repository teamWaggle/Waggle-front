import { Box } from "waggle-design-system";

import type { BoxProps } from "@/components/Box/Box";

import { modalContainerStyle } from "@/components/ModalContainer/ModalContainer.style";

const ModalContainer = ({ children, ...props }: BoxProps) => {
  return (
    <Box {...props} css={modalContainerStyle}>
      {children}
    </Box>
  );
};
export default ModalContainer;
