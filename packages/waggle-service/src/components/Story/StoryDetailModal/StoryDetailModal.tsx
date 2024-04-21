import { Suspense } from "react";

import { css } from "@emotion/react";

import { Flex, Modal, Theme } from "waggle-design-system";

import StoryComment from "@/components/Story/StoryComment/StoryComment";
import StoryContent from "@/components/Story/StoryDetailModal/StoryContent/StoryContent";
import StoryMedia from "@/components/Story/StoryDetailModal/StoryMedia/StoryMedia";
import StoryCommentSkeleton from "@/components/Story//StoryComment/StoryCommentSkeleton";

import { useStoryQuery } from "@/hooks/api/story/useStoryQuery";

interface StoryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  boardId: number;
}

const StoryDetailModal = ({ isOpen, onClose, boardId }: StoryDetailModalProps) => {
  const { storyData } = useStoryQuery(boardId);

  const { mediaList, recommendCount } = storyData.result;

  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <Flex css={layoutStyle}>
        <StoryMedia mediaList={mediaList} />

        <Flex styles={{ direction: "column", borderLeft: "1px solid #d2d2d2", height: "100%" }}>
          <StoryContent storyData={storyData.result} />

          <Suspense fallback={<StoryCommentSkeleton />}>
            <StoryComment boardId={boardId} recommendCount={recommendCount} />
          </Suspense>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default StoryDetailModal;

export const layoutStyle = css({
  width: "1060px",
  height: "736px",
  backgroundColor: Theme.color.white,
  borderRadius: "42px",
  border: `5px solid ${Theme.color.brand_primary}`,
  boxShadow: Theme.boxShadow.shadow1,
});
