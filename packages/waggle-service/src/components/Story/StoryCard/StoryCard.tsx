import { Suspense } from "react";

import { Flex, useOverlay } from "waggle-design-system";

import MediaIcon from "@/assets/svg/ic-many-media.svg?react";

import StoryDetailModal from "@/components/Story/StoryDetailModal/StoryDetailModal";
import StoryDetailModalSkeleton from "@/components/Story/StoryDetailModal/StoryDetailModalSkeleton";

import type { StoryListInfoType } from "@/types/story";

import { imgStyle, iconStyle } from "@/components/Story/StoryCard/StoryCard.style";

const StoryCard = ({ boardId, thumbnail }: StoryListInfoType) => {
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
        <Suspense
          fallback={
            <StoryDetailModalSkeleton
              isOpen={isStoryDetailModalOpen}
              onClose={closeStoryDetailModal}
            />
          }
        >
          <StoryDetailModal
            isOpen={isStoryDetailModalOpen}
            onClose={closeStoryDetailModal}
            boardId={boardId}
          />
        </Suspense>
      )}
    </>
  );
};

export default StoryCard;
