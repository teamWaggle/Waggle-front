import {
	headerStyle,
	logoStyle,
	textStyle,
} from "@components/Header/Header.style";

import Logo from "@assets/svg/logo.svg?react";

import Flex from "@components/common/Flex/Flex";

import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	return (
		<header css={headerStyle}>
			<Flex
				styles={{
					justify: "space-between",
					align: "center",
					padding: "0 146px",
					height: "85px",
				}}
			>
				<Logo css={logoStyle} onClick={() => navigate("/")} />
				<Flex styles={{ align: "center", gap: "100px" }}>
					<p css={textStyle}>SIREN</p>
					<p css={textStyle}>Q&A</p>
					<p css={textStyle}>CONNECTION</p>
					<p css={textStyle}>TEAM PLANNING</p>
					<p css={textStyle}>My Waggle</p>
				</Flex>
			</Flex>
		</header>
	);
};

export default Header;
