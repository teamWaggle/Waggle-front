import { Flex, Heading, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagStyle, generateTagName } from "@/utils/generateTag";

import type { SirenTitleType } from "@/types/siren";

import { tagStyle, profileStyle } from "@/components/Siren/Detail/Title/Title.style";

const Title = ({ category, title, member, lostDate, viewCount }: SirenTitleType) => {
	return (
		<Flex styles={{ direction: "column", gap: "12px", marginBottom: "18px" }}>
			<Flex css={tagStyle(generateTagStyle(category))}>
				<Text>{generateTagName(category)}</Text>
			</Flex>

			<Heading css={getDefaultTextStyle(Theme.color.text, 700)}>{title}</Heading>

			<Flex css={profileStyle}>
				<img src={member.profileImgUrl} alt="profileImg" />
				<Text>
					<span>{member.nickname}</span>
					<span>조회 {viewCount}</span>
					<span>{lostDate}</span>
				</Text>
			</Flex>
		</Flex>
	);
};

export default Title;
