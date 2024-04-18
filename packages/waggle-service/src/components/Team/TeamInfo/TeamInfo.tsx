import GroupIcon from "@/assets/svg/group.svg?react";

import { Flex, Heading, Text, Box } from "@/components/common";
import MemberCard from "@/components/Team/TeamInfo/SliderTemplate/MemberSlider/MemberCard";
import ParticipationCard from "@/components/Team/TeamInfo/SliderTemplate/ParticipationSlider/ParticipationCard";
import { useTeamInfo } from "@/hooks/team/useTeamInfo";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import {
  teamImgStyle,
  teamInfoBoxStyle,
  teamInfoNewApplyStyle,
  teamInfoSubTitleStyle,
  teamParticipationBoxStyle,
  teamSectionStyle,
} from "@/components/Team/TeamInfo/TeamInfo.style";
import { useTeamParticipationList } from "@/hooks/api/team/useTeamParticipationList";
import MemberSlider from "@/components/Team/TeamInfo/SliderTemplate/MemberSlider/MemberSlider";
import ParticipationSlider from "@/components/Team/TeamInfo/SliderTemplate/ParticipationSlider/ParticipationSlider";
import TeamLeaderContainer from "@/components/Team/TeamInfo/TeamLeaderContainer/TeamLeaderContainer";

// const memberList = [
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
//   { userUrl: "s", memberId: 12, nickname: "김민수", profileImgUrl: "팀장" },
// ];

const TeamInfo = () => {
  const teamId = useParamsTeamId();
  const { name, description, teamMemberList, coverImageUrl, teamSize } = useTeamInfo(teamId) || {};
  const participationMemberList = useTeamParticipationList(teamId);

  return (
    <Flex css={teamSectionStyle} tag="section">
      <img css={teamImgStyle} src={coverImageUrl} />
      <Box css={teamInfoBoxStyle}>
        <Heading size="xLarge">{name}</Heading>
        <Text size="xLarge" css={teamInfoSubTitleStyle}>
          {description}
        </Text>
        <Flex styles={{ align: "center", position: "relative" }}>
          <GroupIcon />
          <Text size="large" style={{ marginRight: "40px" }}>
            {teamSize}/50
          </Text>
          <MemberSlider memberList={teamMemberList}>
            {teamMemberList?.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))}
          </MemberSlider>
        </Flex>
        <TeamLeaderContainer>
          <Flex css={teamParticipationBoxStyle}>
            <Text css={teamInfoNewApplyStyle} style={{ marginRight: "40px" }}>
              새로운 가입 신청
            </Text>
            <ParticipationSlider participationMemberList={participationMemberList}>
              {participationMemberList?.map((participatingMember, index) => (
                <ParticipationCard key={index} participatingMember={participatingMember} />
              ))}
            </ParticipationSlider>
          </Flex>
        </TeamLeaderContainer>
      </Box>
    </Flex>
  );
};

export default TeamInfo;
