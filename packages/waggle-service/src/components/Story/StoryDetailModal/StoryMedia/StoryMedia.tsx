import { css } from "@emotion/react";

import { Flex, Carousel } from "@/components/common";

interface StoryMediaParams {
  mediaList: string[];
}

const StoryMedia = ({ mediaList }: StoryMediaParams) => {
  return (
    <Flex css={mediaBoxStyle}>
      <Carousel
        width={740}
        height={726}
        borderRadius="36px 0 0 36px"
        showArrows={mediaList.length > 1}
        showDots={mediaList.length > 1}
        length={mediaList.length}
      >
        {mediaList.map((imgUrl, index) => (
          <Carousel.Item index={index} key={imgUrl}>
            <img src={imgUrl} alt="img" />
          </Carousel.Item>
        ))}
      </Carousel>
    </Flex>
  );
};

export default StoryMedia;

const mediaBoxStyle = css({
  width: "740px",
  height: "100%",
  borderRight: "1px solid #d2d2d2",
});
