import GroupIcon from "@/assets/svg/group.svg?react";

import { Box, Flex, Heading, Slider, Text } from "@/components/common";
import MemberCard from "@/components/Team/TeamInfo/MemberSlider/MemberCard";
import ParticipationCard from "@/components/Team/TeamInfo/ParticipationSlider/ParticipationCard";

import { TEAM_INFO } from "@/constants/team";

import {
	memberSliderBoxStyle,
	participationSliderBoxStyle,
	teamImgStyle,
	teamInfoBoxStyle,
	teamInfoNewApplyStyle,
	teamInfoSubTitleStyle,
	teamSectionStyle,
} from "@/components/Team/TeamInfo/TeamInfo.style";
const members = [
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
];

const participatingMembers = [
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
];

const TeamInfo = () => {
	const memberLength = members.length;
	const participatingMemberLength = participatingMembers.length;
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
					<Slider
						cardBoxstyle={memberSliderBoxStyle}
						displayCount={TEAM_INFO.MEMBERS_SLIDER_AMOUNT}
						length={memberLength}
					>
						{members.map((member, index) => (
							<MemberCard key={index} member={member} />
						))}
					</Slider>
				</Flex>
				<Flex styles={{ align: "center", marginTop: "10px" }}>
					<Text css={teamInfoNewApplyStyle}>새로운 가입 신청</Text>
					<Slider
						cardBoxstyle={participationSliderBoxStyle}
						displayCount={TEAM_INFO.PARTICIPATION_SLIDER_AMOUNT}
						length={participatingMemberLength}
					>
						{participatingMembers.map((participatingMember, index) => (
							<ParticipationCard key={index} participatingMember={participatingMember} />
						))}
					</Slider>
				</Flex>
			</Box>
		</Flex>
	);
};

export default TeamInfo;
