import { Box, Flex, Text } from "@/components/common";
import LoginModal from "@/components/Landing/Sidebar/Login/LoginModal";

import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	buttonStyle,
	resultBoxStyle,
} from "@/components/Landing/Sidebar/Login/FindEmailModal.style";

const ResultEmail = ({ email, modalClose }: { email: string[]; modalClose: () => void }) => {
	const modal = useModal();

	const handleCloseModal = () => {
		modal.closeModal();
	};

	const handleLoginClick = () => {
		modalClose();

		modal.openModal({
			key: `LoginModal`,
			component: () => <LoginModal modalClose={handleCloseModal} />,
		});
	};

	return (
		<Flex styles={{ direction: "column", gap: "153px", marginTop: "35px" }}>
			<Box css={resultBoxStyle}>
				<Text css={getDefaultTextStyle(Theme.color.text, 600)}>{email}</Text>
			</Box>
			<button type="button" css={buttonStyle} onClick={handleLoginClick}>
				로그인
			</button>
		</Flex>
	);
};

export default ResultEmail;
