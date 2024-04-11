import CheckIcon from "@/assets/svg/ic-password-check.svg?react";

import { Flex, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

const NicknameDescription = () => {
  return (
    <Flex styles={{ direction: "column", gap: "12px" }}>
      <Text css={getDefaultTextStyle(Theme.color.text, 600)}>닉네임은 이런 곳에 쓰여요!</Text>
      <Flex styles={{ direction: "column", gap: "8px" }}>
        <Flex styles={{ align: "center", gap: "6px" }}>
          <CheckIcon />
          <Text size="small" css={getDefaultTextStyle(Theme.color.text, 500)}>
            닉네임으로 게시물을 작성하거나 댓글을 남길 수 있어요
          </Text>
        </Flex>
        <Flex styles={{ align: "center", gap: "6px" }}>
          <CheckIcon />
          <Text size="small" css={getDefaultTextStyle(Theme.color.text, 500)}>
            상대방이 나를 언급할 때 내 닉네임을 사용해 태그할 수 있어요
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NicknameDescription;
