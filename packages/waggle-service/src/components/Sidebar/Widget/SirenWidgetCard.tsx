import { Flex, Theme, Tag } from "waggle-design-system";

import SampleImg from "@/assets/png/post-sample.png";

import {
  imgStyle,
  textStyle,
  subTextStyle,
  tagStyle,
} from "@/components/Sidebar/Widget/Widget.style";

const SirenWidgetCard = () => {
  return (
    <Flex
      styles={{
        align: "center",
        gap: "22px",
        padding: "6px 12px",
        borderRadius: "8px",
        boxShadow: Theme.boxShadow.shadow1,
        position: "relative",
        width: "266px",
      }}
    >
      <img src={SampleImg} alt="sampleImg" css={imgStyle} />
      <Flex styles={{ direction: "column", justify: "center", gap: "8px" }}>
        <p css={textStyle}>강아지를 찾고 있습니다asdfasdfasddfasasdfasfdsasdfasdf</p>
        <p css={subTextStyle}>제주특별자치도 제주시</p>
      </Flex>

      <Flex styles={{ position: "absolute" }} css={tagStyle}>
        <Tag tagText="FIND_PET" isSmall />
      </Flex>
    </Flex>
  );
};

export default SirenWidgetCard;
