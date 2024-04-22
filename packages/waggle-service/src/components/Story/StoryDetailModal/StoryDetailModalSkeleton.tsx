import { Modal, Flex, Spinner } from "waggle-design-system";

import type { ModalProps } from "@/types/modal";

import { layoutStyle } from "@/components/Story/StoryDetailModal/StoryDetailModal";

const StoryDetailModalSkeleton = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <Flex styles={{ align: "center", justify: "center" }} css={layoutStyle}>
        <Spinner />
      </Flex>
    </Modal>
  );
};

export default StoryDetailModalSkeleton;
