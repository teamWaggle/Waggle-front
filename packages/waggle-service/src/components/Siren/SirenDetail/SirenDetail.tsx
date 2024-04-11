import { useNavigate } from "react-router-dom";

import { Flex, Box, Divider } from "@/components/common";
import Comment from "@/components/common/Comment/Comment";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import SirenContent from "@/components/Siren/SirenDetail/SirenContent/SirenContent";
import SirenTitle from "@/components/Siren/SirenDetail/SirenTitle";

import { PATH } from "@/constants/path";

import { useDeleteSirenMutation } from "@/hooks/api/siren/useDeleteSirenMutation";
import useModal from "@/hooks/useModal";

import type { SirenDataType } from "@/types/siren";

import { layoutStyle } from "@/components/common/Post/Post.style";

const SirenDetail = ({ sirenData }: SirenDataType) => {
  const { mutate: deleteSirenMutate } = useDeleteSirenMutation();

  const navigate = useNavigate();

  const modal = useModal();

  const { boardId } = sirenData;

  const deleteMutate = () => {
    deleteSirenMutate(boardId, {
      onSuccess: () => {
        window.location.href = PATH.SIREN;
      },
    });
  };

  const handleDeleteSiren = () => {
    modal.openModal({
      key: `DeleteWarningModal`,
      component: () => <DeleteWarningModal handleDelete={deleteMutate} />,
      notCloseIcon: true,
    });
  };

  return (
    <Box tag="main">
      <Flex css={layoutStyle}>
        <SirenTitle
          sirenData={sirenData}
          handleEditSiren={() => navigate(PATH.SIREN_EDIT(String(boardId)))}
          handleDeleteSiren={handleDeleteSiren}
        />

        <Divider />

        <SirenContent sirenData={sirenData} />
      </Flex>

      <Divider />

      <Comment boardId={boardId} />
    </Box>
  );
};

export default SirenDetail;
