import { useNavigate } from "react-router-dom";

import Logo from "@/assets/svg/logo.svg?react";
import { Flex, Box, Text } from "@/components/common";

import { headerStyle, logoStyle, textStyle } from "@/components/Header/Header.style";

const navData = [
	{
		title: "SIREN",
		link: "/siren",
	},
	{
		title: "Q&A",
		link: "/question",
	},
	{
		title: "CONNECTION",
		link: "/connection",
	},
	{
		title: "PLANNING",
		link: "/planning",
	},
	{
		title: "My Waggle",
		link: "/mypage",
	},
];

const Header = () => {
	const navigate = useNavigate();

	return (
		<header css={headerStyle}>
			<Box styles={{ width: "1536px", margin: "0 auto" }}>
				<Flex
					styles={{
						justify: "space-between",
						align: "center",
						padding: "0 196px",
						height: "85px",
					}}
				>
					<Logo css={logoStyle} onClick={() => navigate("/")} />
					<Flex styles={{ align: "center", gap: "100px" }}>
						{navData.map((data) => (
							<Text
								key={data.title}
								size="xLarge"
								css={textStyle}
								onClick={() => navigate(data.link)}
							>
								{data.title}
							</Text>
						))}
					</Flex>
				</Flex>
			</Box>
		</header>
	);
};

export default Header;
