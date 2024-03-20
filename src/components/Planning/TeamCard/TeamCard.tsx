import ProfileTeamCardIcon from "@/assets/svg/profile-teamcard.svg?react";

import { Box, Flex, Text } from "@/components/common";

import { useHandleLinkWithDetectKeys } from "@/hooks/useHandleLinkWithDetectKeys";

import type { TeamCardType } from "@/types/planning";

import {
	boxStyle,
	circleDivStyle,
	groupCountTextStyle,
	imgStyle,
	subtitleTextStyle,
	textBoxStyle,
	textStyle,
} from "@/components/Planning/TeamCard/TeamCard.style";

const TeamCard = ({ data }: { data: TeamCardType }) => {
	const { name, coverImageUrl, description, teamSize, maxTeamSize, colorScheme } = data;
	const handleOnclick = useHandleLinkWithDetectKeys();
	return (
		<Box tag="a" css={boxStyle} onClick={(e) => handleOnclick(e, `/team/${name}`)}>
			<img src={coverImageUrl} alt={name} css={imgStyle} />
			<Box css={textBoxStyle}>
				<Flex styles={{ align: "center", gap: "4px", marginBottom: "4px" }}>
					<Box css={circleDivStyle(colorScheme)} />
					<Text size="medium" css={textStyle(colorScheme)}>
						{name}
					</Text>
				</Flex>
				<Text size="small" css={subtitleTextStyle}>
					{description}
				</Text>
				<Flex styles={{ align: "center" }}>
					<ProfileTeamCardIcon /> &nbsp;
					<Text css={groupCountTextStyle} size="small">
						{teamSize}/{maxTeamSize}
					</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export default TeamCard;
