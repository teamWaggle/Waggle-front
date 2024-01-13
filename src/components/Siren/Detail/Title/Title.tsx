import { Flex, Heading, Text } from "@/components/common";
import { SirenResultType } from "@/types/siren";

import {
	tagStyle,
	headingStyle,
	profileStyle,
	textStyle,
} from "@/components/Siren/Detail/Title/Title.style";

const Title = ({ profileImg, category, title, username, lostDate }: SirenResultType) => {
	return (
		<Flex styles={{ direction: "column", gap: "12px", marginBottom: "18px" }}>
			<Flex styles={{ justify: "center", align: "center" }} css={tagStyle}>
				<Text>{category}</Text>
			</Flex>
			<Heading css={headingStyle}>{title}</Heading>
			<Flex styles={{ align: "center", gap: "14px" }}>
				<img src={profileImg} alt={profileImg} css={profileStyle} />
				<Text css={textStyle}>{username}</Text>
				<Text css={textStyle}>조회 129</Text>
				<Text css={textStyle}>{lostDate}</Text>
			</Flex>
		</Flex>
	);
};

export default Title;
