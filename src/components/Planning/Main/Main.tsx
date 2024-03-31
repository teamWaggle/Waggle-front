import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";
import RightArrowIcon from "@/assets/svg/right-arrow-brand-primary.svg?react";

import { Box, Flex, Heading, SearchInput, Text, MainContainer, Slider } from "@/components/common";
import TeamCard from "@/components/Planning/TeamCard/TeamCard";

import { PLANNING } from "@/constants/planning";

import { useGetMemberTeams } from "@/hooks/api/team/useGetMemberTeams";

import {
	headingStyle,
	buttonStyle,
	flexStyle,
	gridBoxStyle,
	leftArrowIconStyle,
	rightArrowIconStyle,
	sliderBoxStyle,
} from "@/components/Planning/Main/Main.style";

// const mockData: unknown = [
// 	{
// 		teamId: 1,
// 		name: "신나는 강아지 유치원",
// 		description: "성북구에 있는 강아지 유치원이에요! 강아지,사람과 함께 와글와글와글",
// 		teamSize: 3,
// 		maxTeamSize: 50,
// 		colorScheme: "team1",
// 		coverImageUrl: "https://source.unsplash.com/random/300x300",
// 	},
// 	{
// 		teamId: 2,
// 		name: "신나는 강아지 유치원",
// 		description: "성북구에 있는 강아지 유치원이에요! 강아지,사람과 함께 와글와글와글",
// 		teamSize: 3,
// 		maxTeamSize: 50,
// 		colorScheme: "team3",
// 		coverImageUrl: "https://source.unsplash.com/random/300x300",
// 	},
// 	{
// 		teamId: 3,
// 		name: "신나는 강아지 유치원",
// 		description: "성북구에 있는 강아지 유치원이에요! 강아지,사람과 함께 와글와글와글",
// 		teamSize: 3,
// 		maxTeamSize: 50,
// 		colorScheme: "team8",
// 		coverImageUrl: "https://source.unsplash.com/random/300x300",
// 	},
// 	{
// 		teamId: 4,
// 		name: "신나는 강아지 유치원",
// 		description: "성북구에 있는 강아지 유치원이에요! 강아지,사람과 함께 와글와글와글",
// 		teamSize: 3,
// 		maxTeamSize: 50,
// 		colorScheme: "team7",
// 		coverImageUrl: "https://source.unsplash.com/random/300x300",
// 	},
// 	{
// 		teamId: 5,
// 		name: "신나는 강아지 유치원",
// 		description: "성북구에 있는 강아지 유치원이에요! 강아지,사람과 함께 와글와글와글",
// 		teamSize: 3,
// 		maxTeamSize: 50,
// 		colorScheme: "team5",
// 		coverImageUrl: "https://source.unsplash.com/random/300x300",
// 	},
// ];

const Main = () => {
	const { teamList } = useGetMemberTeams();

	return (
		<MainContainer>
			<Flex css={flexStyle}>
				<Heading css={headingStyle} size="medium">
					My TEAM
				</Heading>
				<button css={buttonStyle}>
					<Text size="large">팀 만들기</Text>
				</button>
			</Flex>
			{/* <Slider items={teamList} /> */}
			<Slider
				leftIcon={<LeftArrowIcon css={leftArrowIconStyle} />}
				rightIcon={<RightArrowIcon css={rightArrowIconStyle} />}
				cardBoxstyle={sliderBoxStyle}
				displayCount={PLANNING.PLANNING_MYTEAM_SLIDER_AMOUNT}
				dataLength={teamList.length}
			>
				{teamList.map((data) => (
					<TeamCard key={data.teamId} data={data} />
				))}
			</Slider>

			<Flex css={flexStyle}>
				<Heading css={headingStyle} size="medium">
					Waggle에서 모여봐요!
				</Heading>
				<SearchInput onChange={() => {}} width="247px" />
			</Flex>
			<Box css={gridBoxStyle}>
				{teamList.map((data) => (
					<TeamCard key={data.teamId} data={data} />
				))}
			</Box>
		</MainContainer>
	);
};

export default Main;
