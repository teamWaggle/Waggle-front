import ParticipationCard from "@/components/Team/TeamInfo/SliderTemplate/ParticipationSlider/ParticipationCard";
import ParticipationSlider from "@/components/Team/TeamInfo/SliderTemplate/ParticipationSlider/ParticipationSlider";
import { teamInfoNewApplyStyle } from "@/components/Team/TeamInfo/TeamInfo.style";
import { useTeamParticipationList } from "@/hooks/api/team/useTeamParticipationList";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import { Flex, Text } from "waggle-design-system";

const ParticipationSliderSection = () => {
  const teamId = useParamsTeamId();
  const participationMemberList = useTeamParticipationList(teamId);

  return (
    <Flex styles={{ marginTop: "10px", align: "center" }}>
      {participationMemberList?.length !== 0 && (
        <Text css={teamInfoNewApplyStyle} style={{ marginRight: "40px" }}>
          새로운 가입 신청
        </Text>
      )}
      <ParticipationSlider participationMemberList={participationMemberList}>
        {participationMemberList?.map((participatingMember, index) => (
          <ParticipationCard key={index} participatingMember={participatingMember} />
        ))}
      </ParticipationSlider>
    </Flex>
  );
};
export default ParticipationSliderSection;
