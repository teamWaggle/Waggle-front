import { Box, Flex, Heading, SearchInput, Text } from "@/components/common";
import Slider from "@/components/Planning/Main/Slider/Slider";
import TeamCard from "@/components/Planning/TeamCard/TeamCard";
import { TeamCardType } from "@/types/planning";

import {
	sectionStyle,
	headingStyle,
	buttonStyle,
	flexStyle,
	gridBoxStyle,
} from "@/components/Planning/Main/Main.style";

const mockData: TeamCardType[] = [
	{
		teamId: 1,
		name: "신나는 강아지 유치원",
		description: "성북구에 있는 강아지 유치원이에요! 강아지,사람과 함께 와글와글와글",
		teamSize: 3,
		maxTeamSize: 50,
		colorScheme: "team1",
		coverImageUrl: "https://source.unsplash.com/random/300x300",
	},
	{
		teamId: 2,
		name: "신나는 강아지 유치원",
		description: "성북구에 있는 강아지 유치원이에요! 강아지,사람과 함께 와글와글와글",
		teamSize: 3,
		maxTeamSize: 50,
		colorScheme: "team3",
		coverImageUrl: "https://source.unsplash.com/random/300x300",
	},
	{
		teamId: 3,
		name: "신나는 강아지 유치원",
		description: "성북구에 있는 강아지 유치원이에요! 강아지,사람과 함께 와글와글와글",
		teamSize: 3,
		maxTeamSize: 50,
		colorScheme: "team8",
		coverImageUrl: "https://source.unsplash.com/random/300x300",
	},
	{
		teamId: 4,
		name: "신나는 강아지 유치원",
		description: "성북구에 있는 강아지 유치원이에요! 강아지,사람과 함께 와글와글와글",
		teamSize: 3,
		maxTeamSize: 50,
		colorScheme: "team7",
		coverImageUrl: "https://source.unsplash.com/random/300x300",
	},
	{
		teamId: 5,
		name: "신나는 강아지 유치원",
		description: "성북구에 있는 강아지 유치원이에요! 강아지,사람과 함께 와글와글와글",
		teamSize: 3,
		maxTeamSize: 50,
		colorScheme: "team5",
		coverImageUrl: "https://source.unsplash.com/random/300x300",
	},
];

const Main = () => {
	return (
		<Box tag="section" css={sectionStyle}>
			<Flex css={flexStyle}>
				<Heading css={headingStyle} size="medium">
					My TEAM
				</Heading>
				<button css={buttonStyle}>
					<Text size="large">팀 만들기</Text>
				</button>
			</Flex>
			<Slider items={mockData} />
			<Flex css={flexStyle}>
				<Heading css={headingStyle} size="medium">
					Waggle에서 모여봐요!
				</Heading>
				<SearchInput onChange={() => {}} width="247px" />
			</Flex>
			<Box css={gridBoxStyle}>
				{mockData.map((data) => (
					<TeamCard key={data.teamId} data={data} />
				))}
			</Box>
		</Box>
	);
};

export default Main;
