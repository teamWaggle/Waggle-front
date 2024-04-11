import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";
import RightArrowIcon from "@/assets/svg/right-arrow-brand-primary.svg?react";

import { Slider } from "@/components/common";
import EmptyMemberTeam from "@/components/Planning/Main/MemberTeamSlider/EmptyMemberTeam/EmptyMemberTeam";
import TeamCard from "@/components/Planning/TeamCard/TeamCard";

import { PLANNING } from "@/constants/planning";

import { useReissueToken } from "@/hooks/api/auth/useReissueToken";
import { useGetMemberTeams } from "@/hooks/api/team/useGetMemberTeams";

import {
  leftArrowIconStyle,
  rightArrowIconStyle,
  sliderBoxStyle,
} from "@/components/Planning/Main/MemberTeamSlider/MemberTeamSlider.style";

const MemberTeamSlider = () => {
  const memberId = useReissueToken();
  const teamList = useGetMemberTeams(memberId);

  return (
    <>
      {teamList?.length === 0 ? (
        <EmptyMemberTeam />
      ) : (
        <Slider
          leftIcon={<LeftArrowIcon css={leftArrowIconStyle} />}
          rightIcon={<RightArrowIcon css={rightArrowIconStyle} />}
          cardBoxstyle={sliderBoxStyle}
          displayCount={PLANNING.PLANNING_MYTEAM_SLIDER_AMOUNT}
          dataLength={teamList?.length || 0}
        >
          {teamList?.map((data) => (
            <TeamCard key={data.teamId} data={data} />
          ))}
        </Slider>
      )}
    </>
  );
};
export default MemberTeamSlider;
