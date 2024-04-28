import { css } from "@emotion/react";

import { Flex, Box, Divider } from "waggle-design-system";

import ConnectionSearchbar from "@/components/Connection/ConnectionMain/ConnectionSearchbar";
import ConnectionCard from "@/components/Connection/ConnectionMain/ConnectionCard";

const ConnectionMain = () => {
  return (
    <Box tag="main" css={mainBoxStyle}>
      <Flex styles={{ gap: "24px" }}>
        <Flex styles={{ direction: "column", gap: "50px", marginTop: "32px" }}>
          <ConnectionSearchbar />

          <Box tag="ol" css={gridBoxStyle}>
            <ConnectionCard />
            <ConnectionCard />
            <ConnectionCard />
          </Box>
        </Flex>

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

const gridBoxStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
});
