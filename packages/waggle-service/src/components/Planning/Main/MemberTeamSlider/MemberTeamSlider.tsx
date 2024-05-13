import { Fragment } from "react";

import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";
import RightArrowIcon from "@/assets/svg/right-arrow-brand-primary.svg?react";

import { Slider } from "@/components/common";
import EmptyMemberTeam from "@/components/Planning/Main/MemberTeamSlider/EmptyMemberTeam/EmptyMemberTeam";
import TeamCard from "@/components/Planning/TeamCard/TeamCard";

import { PLANNING } from "@/constants/planning";

import { useGetMemberTeams } from "@/hooks/api/team/useGetMemberTeams";

import {
  leftArrowIconStyle,
  rightArrowIconStyle,
  sliderBoxStyle,
} from "@/components/Planning/Main/MemberTeamSlider/MemberTeamSlider.style";
import useObserver from "@/hooks/common/useObserver";

const MemberTeamSlider = () => {
  const { memberTeamsData, fetchNextPage, hasNextPage, isFetching } = useGetMemberTeams();

  const dataLength = memberTeamsData.pages[0].result.teamCount;

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });
  return (
    <>
      {dataLength === 0 ? (
        <EmptyMemberTeam />
      ) : (
        <Slider
          leftIcon={<LeftArrowIcon css={leftArrowIconStyle} />}
          rightIcon={<RightArrowIcon css={rightArrowIconStyle} />}
          cardBoxstyle={sliderBoxStyle}
          displayCount={PLANNING.PLANNING_MYTEAM_SLIDER_AMOUNT}
          dataLength={dataLength || 0}
        >
          {memberTeamsData.pages.map((memberTeamData) => (
            <Fragment key={memberTeamData.nextPageParam}>
              {memberTeamData.result.teamList.map((teamInfo) => (
                <TeamCard key={teamInfo.teamId} data={teamInfo} />
              ))}
            </Fragment>
          ))}
          <div ref={ref} />
        </Slider>
      )}
    </>
  );
};
export default MemberTeamSlider;
