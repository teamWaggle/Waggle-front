import { Flex, Heading, Theme } from "waggle-design-system";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";

const StoryBio = () => {
  return (
    <Flex styles={{ justify: "center", align: "center", height: "100%" }}>
      <Heading css={getDefaultTextStyle(Theme.color.white, 700)}>
        와글과 함께 꼬리를 흔들어요 왕왕!
      </Heading>
    </Flex>
  );
};

export default StoryBio;
