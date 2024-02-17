import { useState } from "react";

import { Box, Flex, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	buttonStyle,
	resultBoxStyle,
} from "@/components/Landing/Sidebar/Login/FindEmailModal.style";

const ResultEmail = () => {
	const [email] = useState("wa****24@gmail.com");

	return (
		<Flex styles={{ direction: "column", gap: "153px", marginTop: "35px" }}>
			<Box css={resultBoxStyle}>
				<Text css={getDefaultTextStyle(Theme.color.text, 600)}>{email}</Text>
			</Box>
			<button type="button" css={buttonStyle}>
				로그인
			</button>
		</Flex>
	);
};

export default ResultEmail;
