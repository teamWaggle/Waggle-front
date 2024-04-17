import { Slider } from "@/components/common";
import LeftArrowIcon from "@/assets/svg/sm-left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/sm-right-arrow.svg?react";
import { memberSliderBoxStyle } from "@/components/Team/TeamInfo/SliderTemplate/MemberSlider/MemberSlider.style";
import { TEAM_INFO } from "@/constants/team";
import type { TeamMemberType } from "@/types/team";
import { useRecoilValue } from "recoil";
import { teamInfoModalSelector } from "@/recoil/selectors/modalSelector";
import {
  leftArrowIconStyle,
  rightArrowIconStyle,
} from "@/components/Team/TeamInfo/SliderTemplate/SliderTemplate.style";

const MemberSlider = ({
  memberList,
  children,
}: {
  memberList: TeamMemberType[];
  children: React.ReactNode;
}) => {
  const teamInfoModals = useRecoilValue(teamInfoModalSelector);
  return (
    <>
      <Slider
        leftIcon={<LeftArrowIcon css={leftArrowIconStyle} />}
        rightIcon={<RightArrowIcon css={rightArrowIconStyle} />}
        cardBoxstyle={memberSliderBoxStyle}
        displayCount={TEAM_INFO.MEMBERS_SLIDER_AMOUNT}
        dataLength={memberList.length || 0}
      >
        {children}
      </Slider>
      {teamInfoModals.map((modal, index) => {
        const ModalComponent: React.ComponentType = modal.component || (() => null);
        return <ModalComponent key={teamInfoModals[index].key} />;
      })}
    </>
  );
};
export default MemberSlider;
