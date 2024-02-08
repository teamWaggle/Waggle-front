import ProfileTeamCardIcon from "@/assets/svg/profile-teamCard.svg?react";
import { Box, Flex, Text } from "@/components/common";
import { TeamCardType } from "@/types/canlendar";

import {
	boxStyle,
	circleDivStyle,
	groupCountTextStyle,
	imgStyle,
	subtitleTextStyle,
	textBoxStyle,
	textStyle,
} from "@/components/Planning/TeamCard/TeamCard.style";

const TeamCard = ({ photoUrl, title, subtitle, groupSize, color, onClick }: TeamCardType) => {
	return (
		<Box css={boxStyle} onClick={onClick}>
			<img src={photoUrl} alt="" css={imgStyle} />
			<Box css={textBoxStyle}>
				<Flex style={{ alignItems: "center" }}>
					<Box css={circleDivStyle(color)} />
					&nbsp;
					<Text size="medium" css={textStyle(color)}>
						{title}
					</Text>
				</Flex>
				<Text size="small" css={subtitleTextStyle} style={{ marginBottom: "8px" }}>
					{subtitle}
				</Text>
				<Flex style={{ alignItems: "center" }}>
					<ProfileTeamCardIcon /> &nbsp;
					<Text css={groupCountTextStyle} size="small">
						{groupSize}/50
					</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export default TeamCard;
