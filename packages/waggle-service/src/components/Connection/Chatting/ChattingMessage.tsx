import { css } from "@emotion/react";

import { Flex, Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import SampleImg from "@/assets/png/post-sample.png";

const ChattingMessage = () => {
  return (
    <Flex styles={{ gap: "24px" }}>
      <img src={SampleImg} alt="profileImg" css={profileImgStyle} />
      <Box>
        <Flex styles={{ gap: "16px", align: "center" }}>
          <Text css={getDefaultTextStyle(Theme.color.text, 500)}>활발한 강아지</Text>
          <Text css={getDefaultTextStyle(Theme.color.readonly_text, 300)}>오후 4:30</Text>
        </Flex>
        <Box css={messageBoxStyle}>
          네..으으응믕므..고민네..으으응믕므. .고민네..으으응믕므..고민네.
          .으으응믕므..고민네..으으응믕므..고민
        </Box>
      </Box>
    </Flex>
  );
};

export default ChattingMessage;

const profileImgStyle = css({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
});

const messageBoxStyle = css({
  border: `1px solid ${Theme.color.border}`,
  padding: "15px",
  borderRadius: "28px",
  marginTop: "6px",
  maxWidth: "436px",
});
