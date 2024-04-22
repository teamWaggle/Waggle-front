import { useNavigate } from "react-router-dom";

import { Flex, Box, Divider, useOverlay } from "waggle-design-system";

import Comment from "@/components/common/Comment/Comment";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import SirenContent from "@/components/Siren/SirenDetail/SirenContent/SirenContent";
import SirenTitle from "@/components/Siren/SirenDetail/SirenTitle";

import { PATH } from "@/constants/path";

import { useDeleteSirenMutation } from "@/hooks/api/siren/useDeleteSirenMutation";

import type { SirenDataType } from "@/types/siren";

import { layoutStyle } from "@/components/common/Post/Post.style";

const SirenDetail = ({ sirenData }: SirenDataType) => {
  const { mutate: deleteSirenMutate } = useDeleteSirenMutation();

  const navigate = useNavigate();

  const { boardId } = sirenData;

  const {
    isOpen: isDeleteWarningModalOpen,
    close: closeDeleteWarningModal,
    open: openDeleteWarningModal,
  } = useOverlay();

  const deleteMutate = () => {
    deleteSirenMutate(boardId, {
      onSuccess: () => {
        window.location.href = PATH.SIREN;
      },
    });
  };

  return (
    <Box tag="main">
      <Flex styles={{ margin: "70px auto 0", direction: "column" }} css={layoutStyle}>
        <SirenTitle
          sirenData={sirenData}
          handleEditSiren={() => navigate(PATH.SIREN_EDIT(String(boardId)))}
          handleDeleteSiren={openDeleteWarningModal}
        />

        <Divider />

        <SirenContent sirenData={sirenData} />
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

export default SirenDetail;
