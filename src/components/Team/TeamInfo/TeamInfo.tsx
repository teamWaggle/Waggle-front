import GroupIcon from "@/assets/svg/group.svg?react";

import { Box, Flex, Heading, Text, MainContainer } from "@/components/common";

import {
	teamImgStyle,
	teamInfoBoxStyle,
	teamInfoNewApplyStyle,
	teamInfoSubTitleStyle,
	teamSectionStyle,
} from "@/components/Team/TeamInfo/TeamInfo.style";

const TeamInfo = () => {
	return (
		<MainContainer>
			<Flex css={teamSectionStyle} tag="section">
				<img css={teamImgStyle} src="https://source.unsplash.com/random/300x300" />
				<Box css={teamInfoBoxStyle}>
					<Heading size="xLarge">신나는 강아지 유치원</Heading>
					<Text size="xLarge" css={teamInfoSubTitleStyle}>
						성북구에 있는 강아지 유치원이에요! 강아지, 사람과 함께 와글와글와글
					</Text>
					<Flex styles={{ align: "center" }}>
						<GroupIcon />
						<Text size="large">{"3/7"}</Text>
					</Flex>
					<Flex styles={{ align: "center" }}>
						<Text css={teamInfoNewApplyStyle}>새로운 가입 신청</Text>
					</Flex>
				</Box>
			</Flex>
		</MainContainer>
	);
};
export default TeamInfo;
