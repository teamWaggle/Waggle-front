import { Box, Flex, Heading, SearchInput, Text } from "@/components/common";
import Slider from "@/components/Planning/Main/Slider/Slider";
import TeamCard from "@/components/Planning/TeamCard/TeamCard";
import { TeamCardType } from "@/types/canlendar";

import {
	sectionStyle,
	headingStyle,
	buttonStyle,
	flexStyle,
	gridBoxStyle,
} from "@/components/Planning/Main/Main.style";

const mockData: TeamCardType[] = [
	{
		title: "신나는 강아지 유치원",
		subtitle: "성북구에 있는 강아지 유치원이에요! 강아지,사람과 함께 와글와글와글",
		groupSize: 3,
		color: "team1",
		onClick: () => {},
		photoUrl: "https://source.unsplash.com/random/300x300",
	},
	{
		title: "ddd",
		subtitle: "eww",
		groupSize: 3,
		color: "team2",
		onClick: () => {},
		photoUrl: "https://source.unsplash.com/random/300x300",
	},
	{
		title: "ddd",
		subtitle: "eww",
		groupSize: 3,
		color: "team3",
		onClick: () => {},
		photoUrl: "https://source.unsplash.com/random/300x300",
	},
	{
		title: "ddd",
		subtitle: "eww",
		groupSize: 3,
		color: "team4",
		onClick: () => {},
		photoUrl: "https://source.unsplash.com/random/300x300",
	},
	{
		title: "ddd",
		subtitle: "eww",
		groupSize: 3,
		color: "team1",
		onClick: () => {},
		photoUrl: "https://source.unsplash.com/random/300x300",
	},
	{
		title: "ddd",
		subtitle: "eww",
		groupSize: 3,
		color: "team8",
		onClick: () => {},
		photoUrl: "https://source.unsplash.com/random/300x300",
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
				{mockData.map((data, index) => (
					<TeamCard
						key={index}
						photoUrl={data.photoUrl}
						title={data.title}
						subtitle={data.subtitle}
						groupSize={data.groupSize}
						color={data.color}
						onClick={data.onClick}
					/>
				))}
			</Box>
		</Box>
	);
};

export default Main;
