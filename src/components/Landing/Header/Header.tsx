import {
	headerStyle,
	innerStyle,
	logoStyle,
	textStyle,
} from "@/components/Landing/Header/Header.style";

import Logo from "@assets/svg/logo.svg?react";

import Flex from "@components/common/Flex/Flex";

import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	return (
		<header css={headerStyle}>
			<div css={innerStyle}>
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
						<p css={textStyle} onClick={() => navigate("/siren")}>
							SIREN
						</p>
						<p css={textStyle} onClick={() => navigate("/question")}>
							Q&A
						</p>
						<p css={textStyle}>CONNECTION</p>
						<p css={textStyle}>TEAM PLANNING</p>
						<p css={textStyle}>My Waggle</p>
					</Flex>
				</Flex>
			</div>
		</header>
	);
};

export default Header;
