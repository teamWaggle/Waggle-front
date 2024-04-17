import { Slider } from "@/components/common";
import type { TeamMemberType } from "@/types/team";
import LeftArrowIcon from "@/assets/svg/sm-left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/sm-right-arrow.svg?react";
import { participationSliderBoxStyle } from "@/components/Team/TeamInfo/SliderTemplate/ParticipationSlider/ParticipationSlider.style";
import { TEAM_INFO } from "@/constants/team";
import {
  leftArrowIconStyle,
  rightArrowIconStyle,
} from "@/components/Team/TeamInfo/SliderTemplate/SliderTemplate.style";

const ParticipationSlider = ({
  participationMemberList,
  children,
}: {
  participationMemberList: TeamMemberType[];
  children: React.ReactNode;
}) => {
  return (
    <Slider
      leftIcon={<LeftArrowIcon css={leftArrowIconStyle} />}
      rightIcon={<RightArrowIcon css={rightArrowIconStyle} />}
      cardBoxstyle={participationSliderBoxStyle}
      displayCount={TEAM_INFO.PARTICIPATION_SLIDER_AMOUNT}
      dataLength={participationMemberList.length || 0}
    >
      {children}
    </Slider>
  );
};
export default ParticipationSlider;
