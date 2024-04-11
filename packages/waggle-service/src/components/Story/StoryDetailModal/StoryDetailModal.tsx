import { css } from "@emotion/react";

import { Flex } from "@/components/common";
import StoryComment from "@/components/Story/StoryComment/StoryComment";
import StoryContent from "@/components/Story/StoryDetailModal/StoryContent/StoryContent";
import StoryMedia from "@/components/Story/StoryDetailModal/StoryMedia/StoryMedia";

import { Theme } from "@/styles/Theme";

import type { StoryDataType } from "@/types/story";

const StoryDetailModal = ({ storyData }: StoryDataType) => {
  const { boardId, mediaList, recommendCount } = storyData;

  return (
    <Flex css={layoutStyle}>
      <StoryMedia mediaList={mediaList} />

      <Flex styles={{ direction: "column" }}>
        <StoryContent storyData={storyData} />

        <StoryComment boardId={boardId} recommendCount={recommendCount} />
      </Flex>
    </Flex>
  );
};

export default StoryDetailModal;

const layoutStyle = css({
  width: "1060px",
  height: "736px",
  backgroundColor: Theme.color.white,
  borderRadius: "42px",
  border: `5px solid ${Theme.color.brand_primary}`,
  boxShadow: Theme.boxShadow.shadow1,
  position: "relative",
});
