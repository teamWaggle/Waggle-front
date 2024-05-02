import QuestionIcon from "@/assets/svg/ic-question-like.svg?react";

import { Flex, Text } from "waggle-design-system";

import {
  emptyMemberTeamTextStyle,
  questionIconStyle,
} from "@/components/Planning/Main/MemberTeamSlider/EmptyMemberTeam/EmptyMemberTeam.style";

const EmptyMemberTeam = () => {
  return (
    <Flex
      styles={{
        justify: "center",
        align: "center",
        direction: "column",
        width: "100%",
        margin: "100px 0",
      }}
    >
      <QuestionIcon css={questionIconStyle} />
      <Text css={emptyMemberTeamTextStyle}>아직 가입된 팀이 없어요!</Text>
      <Text css={emptyMemberTeamTextStyle}>
        팀에 가입해서 나의 강아지를 위한 일정을 효율적으로 관리해보세요
      </Text>
    </Flex>
  );
};
export default EmptyMemberTeam;
