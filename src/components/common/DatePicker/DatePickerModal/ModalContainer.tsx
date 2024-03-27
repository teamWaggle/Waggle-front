import Box from "@/components/common/Design/Box/Box";

import type { BoxProps } from "@/components/common/Design/Box/Box";

import { modalContainerStyle } from "@/components/common/DatePicker/DatePickerModal/ModalContainer.style";

const ModalContainer = ({ children, ...props }: BoxProps) => {
	return (
		<Box {...props} css={modalContainerStyle}>
			{children}
		</Box>
	);
};
export default ModalContainer;
