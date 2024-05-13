import GroupIcon from "@/assets/svg/group.svg?react";

import { Flex, Heading, Text, Box } from "waggle-design-system";
import MemberCard from "@/components/Team/TeamInfo/SliderTemplate/MemberSlider/MemberCard";
import { useTeamInfo } from "@/hooks/api/team/useTeamInfo";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import {
  teamImgStyle,
  teamInfoBoxStyle,
  teamInfoSubTitleStyle,
  teamSectionStyle,
} from "@/components/Team/TeamInfo/TeamInfo.style";
import MemberSlider from "@/components/Team/TeamInfo/SliderTemplate/MemberSlider/MemberSlider";
import TeamLeaderAuthorizationContainer from "@/components/common/AuthorizationContainer/TeamLeaderAuthorizationContainer";
import ParticipationSliderSection from "@/components/Team/TeamInfo/ParticipationSliderSection";
import LoginAuthorizationContainer from "@/components/common/AuthorizationContainer/LoginAuthorizationContainer";
import { TEAM_INFO } from "@/constants/team";

const TeamInfo = () => {
  const teamId = useParamsTeamId();
  const { name, description, teamMemberList, coverImageUrl, teamSize } = useTeamInfo(teamId) || {};
  return (
    <Flex css={teamSectionStyle} styles={{ marginTop: "50px", align: "center" }} tag="section">
      <img css={teamImgStyle} src={coverImageUrl} />
      <Box css={teamInfoBoxStyle}>
        <Heading size="xLarge">{name}</Heading>
        <Text size="xLarge" css={teamInfoSubTitleStyle}>
          {description}
        </Text>
        <LoginAuthorizationContainer>
          <Flex styles={{ align: "center", position: "relative" }}>
            <GroupIcon />
            <Text size="large" style={{ marginRight: "40px" }}>
              {teamSize}/{TEAM_INFO.TEAM_MAX_SIZE}
            </Text>
            <MemberSlider memberList={teamMemberList}>
              {teamMemberList?.map((member, index) => (
                <MemberCard key={index} member={member} index={index} />
              ))}
            </MemberSlider>
          </Flex>
          <TeamLeaderAuthorizationContainer>
            <ParticipationSliderSection />
          </TeamLeaderAuthorizationContainer>
        </LoginAuthorizationContainer>
      </Box>
    </Flex>
  );
};

export default TeamInfo;
