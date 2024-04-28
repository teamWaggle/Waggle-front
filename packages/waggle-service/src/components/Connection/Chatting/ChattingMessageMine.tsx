import { css } from "@emotion/react";

import { Flex, Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

const ChattingMessageMine = () => {
  return (
    <Flex styles={{ direction: "column", marginLeft: "auto" }}>
      <Flex styles={{ gap: "16px", align: "center", marginLeft: "auto" }}>
        <Text css={getDefaultTextStyle(Theme.color.text, 500)}>활발한 강아지</Text>
        <Text css={getDefaultTextStyle(Theme.color.readonly_text, 300)}>오후 4:30</Text>
      </Flex>
      <Box css={messageBoxStyle}>네..으으응믕므..고민네..으으응믕므</Box>
    </Flex>
  );
};

export default ChattingMessageMine;

const messageBoxStyle = css({
  border: `1px solid ${Theme.color.brand_primary}`,
  backgroundColor: "#fff4e5",
  padding: "15px",
  borderRadius: "28px",
  marginTop: "6px",
  maxWidth: "436px",
});
