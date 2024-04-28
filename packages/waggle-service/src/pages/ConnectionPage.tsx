import { Flex, Heading } from "waggle-design-system";

import ConnectionMain from "@/components/Connection/ConnectionMain/ConnectionMain";

import { bioSectionStyle } from "@/pages//StoryPage/StoryPage";

const ConnectionPage = () => {
  return (
    <>
      <section css={bioSectionStyle}>
        <Flex styles={{ justify: "center", align: "center", height: "100%" }}>
          <Heading>와글과 함께 꼬리를 흔들어요 왕왕!</Heading>
        </Flex>
      </section>

      <ConnectionMain />
    </>
  );
};

export default ConnectionPage;
