import MediaIcon from "@/assets/svg/ic-many-media.svg?react";

import { useOverlay } from "waggle-design-system";

import { Flex } from "@/components/common";
import StoryDetailModal from "@/components/Story/StoryDetailModal/StoryDetailModal";

import { useStoryQuery } from "@/hooks/api/story/useStoryQuery";
import type { StoryListInfoType } from "@/types/story";

import { imgStyle, iconStyle } from "@/components/Story/StoryCard/StoryCard.style";

const StoryCard = ({ boardId, thumbnail }: StoryListInfoType) => {
  const { storyData } = useStoryQuery(boardId);

  const {
    isOpen: isStoryDetailModalOpen,
    close: closeStoryDetailModal,
    open: openStoryDetailModal,
  } = useOverlay();

  return (
    <>
      <Flex
        styles={{ align: "center", width: "252px", height: "252px", position: "relative" }}
        onClick={openStoryDetailModal}
      >
        <img src={thumbnail} alt="profileImg" css={imgStyle} />
        <MediaIcon css={iconStyle} />
      </Flex>

      {isStoryDetailModalOpen && (
        <StoryDetailModal
          isOpen={isStoryDetailModalOpen}
          onClose={closeStoryDetailModal}
          storyData={storyData.result}
        />
      )}
    </>
  );
};

export default StoryCard;
