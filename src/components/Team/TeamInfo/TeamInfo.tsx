import GroupIcon from "@/assets/svg/group.svg?react";

import { Box, Flex, Heading, Text } from "@/components/common";
import MemberSlider from "@/components/Team/TeamInfo/MemberSlider/MemberSlider";
import ParticipationSlider from "@/components/Team/TeamInfo/ParticipationSlider/ParticipationSlider";

import {
	teamImgStyle,
	teamInfoBoxStyle,
	teamInfoNewApplyStyle,
	teamInfoSubTitleStyle,
	teamSectionStyle,
} from "@/components/Team/TeamInfo/TeamInfo.style";

const TeamInfo = () => {
	return (
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
					<MemberSlider
						members={[
							"안녕초코야안녕",
							"dfefwedf",
							"dfefwedf",
							"dfefwedf",
							"dfefwedf",
							"dfefwedf",
							"dfefwedf",
							"12",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9",
						]}
					/>
				</Flex>
				<Flex styles={{ align: "center", marginTop: "10px" }}>
					<Text css={teamInfoNewApplyStyle}>새로운 가입 신청</Text>
					<ParticipationSlider
						participatingMembers={[
							"안녕하세요아아아",
							"adfafwwe",
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
						]}
					/>
				</Flex>
			</Box>
		</Flex>
	);
};

export default TeamInfo;
