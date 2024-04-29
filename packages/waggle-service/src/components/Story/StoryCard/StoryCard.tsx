import { Suspense } from "react";

import { Flex } from "waggle-design-system";

import MediaIcon from "@/assets/svg/ic-many-media.svg?react";

import StoryDetailModal from "@/components/Story/StoryDetailModal/StoryDetailModal";
import StoryDetailModalSkeleton from "@/components/Story/StoryDetailModal/StoryDetailModalSkeleton";

import useModal from "@/hooks/common/useModal";

import type { StoryListInfoType } from "@/types/story";

import { imgStyle, iconStyle } from "@/components/Story/StoryCard/StoryCard.style";

const StoryCard = ({ boardId, thumbnail }: StoryListInfoType) => {
  const { openModal } = useModal();

  const handleStoryDetailOpen = () => {
    openModal({
      key: `StoryDetail${boardId}`,
      component: () => (
        <Suspense fallback={<StoryDetailModalSkeleton />}>
          <StoryDetailModal boardId={boardId} />
        </Suspense>
      ),
    });
  };

  return (
    <Flex
      styles={{ align: "center", width: "252px", height: "252px", position: "relative" }}
      onClick={handleStoryDetailOpen}
    >
      <img src={thumbnail} alt="profileImg" css={imgStyle} />
      <MediaIcon css={iconStyle} />
    </Flex>
  );
};

export default StoryCard;
