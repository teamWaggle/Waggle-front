import { css } from "@emotion/react";

import { Flex, Heading } from "@/components/common";
import StoryMain from "@/components/Story/StoryMain/StoryMain";

import { Theme } from "@/styles/Theme";

const StoryPage = () => {
  return (
    <>
      <section css={bioSectionStyle}>
        <Flex styles={{ justify: "center", align: "center", height: "100%" }}>
          <Heading>와글과 함께 꼬리를 흔들어요 왕왕!</Heading>
        </Flex>
      </section>

      <StoryMain />
    </>
  );
};

export default StoryPage;

export const bioSectionStyle = css({
  height: "332px",
  backgroundColor: Theme.color.brand_primary,

  "& > div > h4": {
    color: Theme.color.white,
    fontWeight: "700",
  },
});
