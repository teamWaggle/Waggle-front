import { useCallback } from "react";

import { Flex, Box, Heading, Text } from "waggle-design-system";

import useModal from "@/hooks/common/useModal";

import {
  layoutStyle,
  buttonBoxStyle,
} from "@/components/common/WarningModal/DeleteWarningModal.style";

interface DeleteWarningModalParams {
  targetText?: string;
  handleDelete: () => void;
}

const DeleteWarningModal = ({ targetText, handleDelete }: DeleteWarningModalParams) => {
  const { selectCloseModal } = useModal();

  const text = targetText ?? "게시물";

  const handleCancelClick = useCallback(() => {
    selectCloseModal(`DeleteWarningModal`);
  }, []);

  return (
    <Flex styles={{ direction: "column", align: "center", justify: "center" }} css={layoutStyle}>
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
        <button onClick={handleCancelClick}>취소</button>
      </Box>
    </Flex>
  );
};

export default DeleteWarningModal;
