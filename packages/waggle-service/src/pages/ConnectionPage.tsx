import { Flex, Box, Heading, Theme } from "waggle-design-system";

import ConnectionMain from "@/components/Connection/ConnectionMain/ConnectionMain";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";

const ConnectionPage = () => {
  return (
    <>
      <Box tag="section" styles={{ height: "332px", backgroundColor: Theme.color.brand_primary }}>
        <Flex styles={{ justify: "center", align: "center", height: "100%" }}>
          <Heading css={getDefaultTextStyle(Theme.color.white, 700)}>
            와글과 함께 꼬리를 흔들어요 왕왕!
          </Heading>
        </Flex>
      </Box>

      <ConnectionMain />
    </>
  );
};

export default ConnectionPage;
