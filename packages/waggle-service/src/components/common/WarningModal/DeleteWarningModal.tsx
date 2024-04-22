import { Modal } from "waggle-design-system";

import { Flex, Box, Heading, Text } from "@/components/common";

import {
  layoutStyle,
  buttonBoxStyle,
} from "@/components/common/WarningModal/DeleteWarningModal.style";

import type { ModalProps } from "@/types/modal";

interface DeleteWarningModalParams extends ModalProps {
  targetText?: string;
  handleDelete: () => void;
  isUpper?: boolean;
}

const DeleteWarningModal = ({
  isOpen,
  onClose,
  targetText,
  handleDelete,
  isUpper,
}: DeleteWarningModalParams) => {
  const text = targetText ?? "게시물";

  return (
    <Modal isOpen={isOpen} closeModal={onClose} hasCloseButton={false} isUpper={isUpper}>
      <Flex css={layoutStyle}>
        <Heading size="xSmall" style={{ marginTop: "32px" }}>
          {text}을 삭제하시겠어요?
        </Heading>

        <Text size="small" style={{ margin: "6px 0 12px" }}>
          삭제하시면 {text} 내용은 되돌릴 수 없습니다.
        </Text>

        <Box css={buttonBoxStyle}>
          <button onClick={handleDelete} className="deleteButton">
            삭제
          </button>
          <button onClick={onClose}>취소</button>
        </Box>
      </Flex>
    </Modal>
  );
};

export default DeleteWarningModal;
