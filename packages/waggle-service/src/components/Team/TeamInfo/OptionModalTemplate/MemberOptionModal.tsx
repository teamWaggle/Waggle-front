import { Box } from "@/components/common";
import OptionModal from "@/components/common/OptionModal/OptionModal";
import OptionModalItem from "@/components/common/OptionModal/OptionModalItem";
import AlertModal from "@/components/common/AlertModal/AlerlModal";
import useModal from "@/hooks/useModal";
import type { SerializedStyles } from "@emotion/react";
import { useDeleteTeamMember } from "@/hooks/api/team/useDeleteTeamMember";

const MemberOptionModal = ({
  modalPositionBoxStyle,
  closeOptionModal,
  memberId,
}: {
  modalPositionBoxStyle: SerializedStyles;
  closeOptionModal: () => void;
  memberId: number;
}) => {
  const { openModal, closeModal } = useModal();
  const { mutate: deleteMemberMutate } = useDeleteTeamMember();
  const handleDeleteMemberConfirm = () => {
    deleteMemberMutate({ memberId });
    closeModal();
  };
  const handleDeleteMember = () => {
    openModal({
      key: "DeleteMemberModal",
      component: () => (
        <AlertModal title="팀원을 삭제하시겠습니까?">
          <AlertModal.Button onClick={closeModal} text="취소"></AlertModal.Button>
          <AlertModal.Button
            onClick={handleDeleteMemberConfirm}
            isConfirm
            text="삭제"
          ></AlertModal.Button>
        </AlertModal>
      ),
    });
  };
  return (
    <Box css={modalPositionBoxStyle}>
      <OptionModal closeModal={closeOptionModal}>
        <OptionModalItem onClick={handleDeleteMember}>팀원 삭제하기</OptionModalItem>
        <OptionModalItem>팀장 권한 위임</OptionModalItem>
      </OptionModal>
    </Box>
  );
};
export default MemberOptionModal;
