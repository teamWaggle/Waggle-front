import { Flex, Heading } from "@/components/common";
import StoryMainSkeleton from "@/components/Story/StoryMain/StoryMainSkeleton";

import { bioSectionStyle } from "@/pages/StoryPage/StoryPage";

const StoryPageSkeleton = () => {
  return (
    <>
      <section css={bioSectionStyle}>
        <Flex styles={{ justify: "center", align: "center", height: "100%" }}>
          <Heading>와글과 함께 꼬리를 흔들어요 왕왕!</Heading>
        </Flex>
      </section>

      <StoryMainSkeleton />
    </>
  );
};

export default StoryPageSkeleton;
