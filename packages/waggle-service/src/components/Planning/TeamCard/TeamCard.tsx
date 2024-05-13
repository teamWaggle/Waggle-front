import ProfileTeamCardIcon from "@/assets/svg/profile-teamcard.svg?react";

import { Box, Flex, Text } from "waggle-design-system";

import { useHandleLinkWithDetectKeys } from "@/hooks/team/useHandleLinkWithDetectKeys";

import type { TeamCardType } from "@/types/team";

import {
  boxStyle,
  circleDivStyle,
  groupCountTextStyle,
  imgStyle,
  subtitleTextStyle,
  textBoxStyle,
  textStyle,
} from "@/components/Planning/TeamCard/TeamCard.style";
import { TEAM_INFO } from "@/constants/team";

const TeamCard = ({ data }: { data: TeamCardType }) => {
  const { name, coverImageUrl, description, teamSize, teamColor, teamId } = data;
  const handleOnclick = useHandleLinkWithDetectKeys();

  return (
    <Box tag="a" css={boxStyle} onClick={(e) => handleOnclick(e, `/team/${teamId}`)}>
      <img src={coverImageUrl} alt={name} css={imgStyle} />
      <Box css={textBoxStyle}>
        <Flex styles={{ align: "center", gap: "4px", marginBottom: "4px" }}>
          <Box css={circleDivStyle(teamColor)} />
          <Text css={textStyle(teamColor)}>{name}</Text>
        </Flex>
        <Text size="small" css={subtitleTextStyle}>
          {description}
        </Text>
        <Flex styles={{ align: "center", gap: "6px" }}>
          <ProfileTeamCardIcon />
          <Text css={groupCountTextStyle} size="small">
            {teamSize}/{TEAM_INFO.TEAM_MAX_SIZE}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default TeamCard;
