import DefaultProfileIcon from "@/assets/svg/profile-default.svg?react";

import { Flex, Heading, Text } from "@/components/common";

import {
  layoutStyle,
  listBoxStyle,
} from "@/components/Question/QuestionSidebar/QuestionSidebarProfile/QuestionSidebarProfile.style";

const QuestionSidebarProfile = () => {
  return (
    <Flex css={layoutStyle}>
      <DefaultProfileIcon />
      <Heading size="small">멍멍이가 좋멍</Heading>
      <Flex
        styles={{
          direction: "column",
          gap: "10px",
          justify: "center",
          width: "100%",
        }}
      >
        <Flex css={listBoxStyle}>
          <Text>미해결 질문</Text>
          <Text>0개</Text>
        </Flex>
        <Flex css={listBoxStyle}>
          <Text>지금까지 한 질문</Text>
          <Text>0개</Text>
        </Flex>
        <Flex css={listBoxStyle}>
          <Text>내가 한 답변</Text>
          <Text>0개</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QuestionSidebarProfile;
