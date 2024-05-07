import { css } from "@emotion/react";

import { Box, Heading, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

const ChattingRoomInfoBox = ({ name, description }: { name: string; description: string }) => {
  return (
    <Box css={titleBoxStyle}>
      <Heading css={getDefaultTextStyle(Theme.color.white, 700)}>{name}</Heading>
      <Text css={getDefaultTextStyle(Theme.color.white, 500)}>{description}</Text>
    </Box>
  );
};

export default ChattingRoomInfoBox;

const titleBoxStyle = css({
  backgroundColor: Theme.color.brand_primary,
  padding: "30px 40px",
  borderRadius: "20px 20px 0 0",

  "& > p": {
    marginTop: "14px",
  },
});
