import { Box, Flex, Text } from "@/components/common";
import LoginModal from "@/components/Login/LoginModal/LoginModal";

import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { buttonStyle, resultBoxStyle } from "@/components/Login/FindEmailModal.style";

const ResultEmail = ({ email }: { email: string[] }) => {
	const modal = useModal();

	const handleLoginClick = () => {
		modal.closeModal();

		modal.openModal({
			key: `LoginModal`,
			component: () => <LoginModal />,
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
