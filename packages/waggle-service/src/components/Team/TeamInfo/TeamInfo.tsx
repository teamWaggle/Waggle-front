import GroupIcon from "@/assets/svg/group.svg?react";
import LeftArrowIcon from "@/assets/svg/sm-left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/sm-right-arrow.svg?react";

import { Box, Flex, Heading, Slider, Text } from "@/components/common";
import MemberCard from "@/components/Team/TeamInfo/MemberSlider/MemberCard";
import ParticipationCard from "@/components/Team/TeamInfo/ParticipationSlider/ParticipationCard";

import { TEAM_INFO } from "@/constants/team";

import { useTeamInfo } from "@/hooks/team/useTeamInfo";
import { useParamsTeamId } from "@/hooks/useParamsTeamId";

import {
  leftArrowIconStyle,
  memberSliderBoxStyle,
  participationSliderBoxStyle,
  rightArrowIconStyle,
  teamImgStyle,
  teamInfoBoxStyle,
  teamInfoNewApplyStyle,
  teamInfoSubTitleStyle,
  teamSectionStyle,
} from "@/components/Team/TeamInfo/TeamInfo.style";

const participatingMembers = ["안녕하ㄴㅇㄹㅇㅈ", "ade", "1", "2", "3", "4", "5", "6", "7", "8"];

const TeamInfo = () => {
  const teamId = useParamsTeamId();
  const { name, description, teamMemberList, coverImageUrl, teamSize } = useTeamInfo(teamId) || {};
  const participatingMemberLength = participatingMembers.length;
  return (
    <Flex css={teamSectionStyle} tag="section">
      <img css={teamImgStyle} src={coverImageUrl} />
      <Box css={teamInfoBoxStyle}>
        <Heading size="xLarge">{name}</Heading>
        <Text size="xLarge" css={teamInfoSubTitleStyle}>
          {description}
        </Text>
        <Flex styles={{ align: "center" }}>
          <GroupIcon />
          <Text size="large" style={{ marginRight: "40px" }}>
            {teamSize}/50
          </Text>
          <Slider
            leftIcon={<LeftArrowIcon css={leftArrowIconStyle} />}
            rightIcon={<RightArrowIcon css={rightArrowIconStyle} />}
            cardBoxstyle={memberSliderBoxStyle}
            displayCount={TEAM_INFO.MEMBERS_SLIDER_AMOUNT}
            dataLength={teamSize || 0}
          >
            {teamMemberList?.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </Slider>
        </Flex>
        <Flex styles={{ align: "center", marginTop: "10px" }}>
          <Text css={teamInfoNewApplyStyle} style={{ marginRight: "40px" }}>
            새로운 가입 신청
          </Text>
          <Slider
            leftIcon={<LeftArrowIcon css={leftArrowIconStyle} />}
            rightIcon={<RightArrowIcon css={rightArrowIconStyle} />}
            cardBoxstyle={participationSliderBoxStyle}
            displayCount={TEAM_INFO.PARTICIPATION_SLIDER_AMOUNT}
            dataLength={participatingMemberLength}
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
