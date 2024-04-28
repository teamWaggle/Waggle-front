import { css } from "@emotion/react";

import { Flex, Box, Divider } from "waggle-design-system";

const ConnectionMain = () => {
  return (
    <Box tag="main" css={mainBoxStyle}>
      <Flex styles={{ gap: "24px" }}>
        <Flex styles={{ direction: "column", gap: "50px" }}></Flex>

        <Divider direction="vertical" length="100vh" />
      </Flex>
    </Box>
  );
};

export default ConnectionMain;

const mainBoxStyle = css({
  maxWidth: "1536px",
  margin: "0 auto",
  padding: "0 196px",
});
