import { useNavigate } from "react-router-dom";

import { Flex, Box, Divider, useOverlay } from "waggle-design-system";

import Comment from "@/components/common/Comment/Comment";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import QuestionContent from "@/components/Question/QuestionDetail/QuestionContent";
import QuestionTitle from "@/components/Question/QuestionDetail/QuestionTitle";

import { PATH } from "@/constants/path";

import { useDeleteQuestionMutation } from "@/hooks/api/question/useDeleteQuestionMutation";

import type { QuestionDataType } from "@/types/question";

import { layoutStyle } from "@/components/common/Post/Post.style";

const QuestionDetail = ({ questionData }: QuestionDataType) => {
  const { mutate: deleteQuestionMutae } = useDeleteQuestionMutation();

  const { boardId } = questionData;

  const navigate = useNavigate();

  const {
    isOpen: isDeleteWarningModalOpen,
    close: closeDeleteWarningModal,
    open: openDeleteWarningModal,
  } = useOverlay();

  const deleteMutate = () => {
    deleteQuestionMutae(boardId, {
      onSuccess: () => {
        window.location.href = PATH.QUESTION;
      },
    });
  };

  return (
    <Box tag="main">
      <Flex styles={{ margin: "70px auto 0", direction: "column" }} css={layoutStyle}>
        <QuestionTitle
          questionData={questionData}
          handleEditQuestion={() => navigate(PATH.QUESTION_EDIT(String(boardId)))}
          handleDeleteQuestion={openDeleteWarningModal}
        />

        <Divider />

        <QuestionContent questionData={questionData} />
      </Flex>

      <Divider />

      <Comment boardId={boardId} />

      {isDeleteWarningModalOpen && (
        <DeleteWarningModal
          isOpen={isDeleteWarningModalOpen}
          onClose={closeDeleteWarningModal}
          handleDelete={deleteMutate}
        />
      )}
    </Box>
  );
};

export default QuestionDetail;
