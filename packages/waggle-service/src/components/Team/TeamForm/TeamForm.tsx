import type { FieldValues } from "react-hook-form";

import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";

import { Box, Flex, Heading, Text } from "waggle-design-system";
import { Form } from "@/components/common";
import * as yup from "yup";

import {
  TEAM_CONTENT,
  TEAM_DEFAULT_VALUES,
  TEAM_ISPRIVATE,
  TEAM_PRIVATE,
  TEAM_TITLE,
} from "@/constants/team";

import {
  colorTitleStyle,
  contentTextareaStyle,
  deleteTeamTextStyle,
  headingStyle,
  leftArrowIconStyle,
  submitButtonStyle,
  teamContentBox,
  textInputBoxStyle,
  titleTextInputStyle,
} from "@/components/Team/TeamForm/TeamForm.style";
import { useTeamForm } from "@/hooks/team/useTeamForm";
import useModal from "@/hooks/common/useModal";
import AlertModal from "@/components/common/AlertModal/AlerlModal";
import { PATH } from "@/constants/path";
import { useDeleteTeam } from "@/hooks/api/team/useDeleteTeam";
import { useNavigate } from "react-router-dom";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";

const schema = yup
  .object({
    name: TEAM_TITLE.RULES(),
    description: TEAM_CONTENT.RULES(),
  })
  .required();

const TeamForm = ({ defaultValues }: { defaultValues?: FieldValues }) => {
  const { onSubmit, isEdit, handleLeftArrowIconClick } = useTeamForm(defaultValues);
  const { openModal, closeModal } = useModal();
  const { mutate: deleteTeamMutate } = useDeleteTeam();
  const navigate = useNavigate();
  const teamId = useParamsTeamId();

  const handleDeleteTeamModal = () => {
    openModal({
      key: "DeleteTeam",
      component: () => (
        <AlertModal title="팀을 삭제하시겠습니까?">
          <AlertModal.Button onClick={closeModal} text="취소"></AlertModal.Button>
          <AlertModal.Button onClick={handleDelete} isConfirm text="삭제"></AlertModal.Button>
        </AlertModal>
      ),
      isWhiteIcon: true,
    });
  };
  const handleDelete = () => {
    deleteTeamMutate(teamId, { onSuccess: () => navigate(PATH.PLANNING, { replace: true }) });
    closeModal();
  };
  return (
    <>
      <Flex styles={{ align: "center", marginTop: "52px", gap: "24px", marginBottom: "20px" }}>
        <LeftArrowIcon css={leftArrowIconStyle} onClick={handleLeftArrowIconClick} />
        <Heading css={headingStyle} size="xLarge">
          {isEdit ? "팀 수정하기" : "팀 설정하기"}
        </Heading>
      </Flex>
      <Form
        onSubmit={onSubmit}
        defaultValues={defaultValues || TEAM_DEFAULT_VALUES}
        schema={schema}
      >
        <Flex css={teamContentBox}>
          <Form.ImageInputField name="coverImageUrl" />
          <Flex
            styles={{ marginLeft: "40px", direction: "column", height: "100%", width: "100%" }}
            css={textInputBoxStyle}
          >
            <Flex styles={{ width: "100%", gap: "12px" }}>
              <Form.DropDownInputField name={TEAM_ISPRIVATE.name} options={TEAM_PRIVATE} />
              <Form.TextInputField
                inputStyle={titleTextInputStyle}
                placeholder={TEAM_TITLE.PLACEHOLDER}
                name={TEAM_TITLE.NAME}
                validateText={TEAM_TITLE.VALIDATE_TEXT()}
              />
            </Flex>
            <Form.TextInputField
              inputStyle={contentTextareaStyle}
              placeholder={TEAM_CONTENT.PLACEHOLDER}
              name={TEAM_CONTENT.NAME}
              validateText={TEAM_CONTENT.VALIDATE_TEXT()}
              isContent
            />
          </Flex>
        </Flex>
        <Box>
          <Text size="large" css={colorTitleStyle}>
            팀 대표 컬러
          </Text>
          <Form.ColorRadioInputField name="teamColor" />
          <button css={submitButtonStyle} type="submit">
            {isEdit ? "팀 수정하기" : "팀 만들기"}
          </button>
        </Box>
      </Form>
      {isEdit && (
        <Flex styles={{ justify: "center" }}>
          <Text css={deleteTeamTextStyle} onClick={handleDeleteTeamModal}>
            팀 삭제하기
          </Text>
        </Flex>
      )}
    </>
  );
};
export default TeamForm;
