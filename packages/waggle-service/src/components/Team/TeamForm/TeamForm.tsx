import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";

import { Box, Flex, Heading, Text } from "waggle-design-system";
import { Form } from "@/components/common";
import * as yup from "yup";

import {
  CREATE_TEAM_FORM_KEY,
  EDIT_TEAM_FORM_KEY,
  TEAM_CONTENT,
  TEAM_DEFAULT_VALUES,
  TEAM_TITLE,
} from "@/constants/team";

import { useCreateTeam } from "@/hooks/api/team/useCreateTeam";
import { useSingleImgUpload } from "@/hooks/common/useSingleImgUpload";

import {
  colorTitleStyle,
  contentTextareaStyle,
  headingStyle,
  leftArrowIconStyle,
  submitButtonStyle,
  teamContentBox,
  textInputBoxStyle,
  titleTextInputStyle,
} from "@/components/Team/TeamForm/TeamForm.style";
import { useEditTeam } from "@/hooks/api/team/useEditTeam";

const schema = yup
  .object({
    name: TEAM_TITLE.RULES(),
    description: TEAM_CONTENT.RULES(),
  })
  .required();

const TeamForm = ({ defaultValues }: { defaultValues?: FieldValues }) => {
  const navigate = useNavigate();
  const { mutate: createTeamMutate } = useCreateTeam();
  const { mutate: editTeamMutate } = useEditTeam();
  const { convertToMediaUrl, uploadMedia } = useSingleImgUpload({});

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    if (data.coverImageUrl) {
      console.log("data.coverImageUrl", data.coverImageUrl);
      console.log("data", data);
      console.log(typeof data.coverImageUrl);
      convertToMediaUrl(data.coverImageUrl);
      data.coverImageUrl = uploadMedia;
      console.log("data.coverImageUrl", uploadMedia);
    }
    const formDataKey = defaultValues ? EDIT_TEAM_FORM_KEY : CREATE_TEAM_FORM_KEY;
    formData.append(formDataKey, JSON.stringify({ ...data, coverImageUrl: uploadMedia }));
    defaultValues ? editTeamMutate(formData) : createTeamMutate(formData);
    navigate(-1);
  };
  return (
    <>
      <Flex styles={{ align: "center", marginTop: "52px", gap: "24px", marginBottom: "20px" }}>
        <LeftArrowIcon css={leftArrowIconStyle} onClick={() => navigate(-1)} />
        <Heading css={headingStyle} size="xLarge">
          {defaultValues ? "팀 수정하기" : "팀 만들기"}
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
            <Form.TextInputField
              inputStyle={titleTextInputStyle}
              placeholder={TEAM_TITLE.PLACEHOLDER}
              name={TEAM_TITLE.NAME}
              validateText={TEAM_TITLE.VALIDATE_TEXT()}
            />
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
          <Text css={colorTitleStyle}>팀 대표 컬러</Text>
          <Form.ColorRadioInputField name="teamColor" />
          <button css={submitButtonStyle} type="submit">
            {defaultValues ? "팀 수정하기" : "팀 생성하기"}
          </button>
        </Box>
      </Form>
    </>
  );
};
export default TeamForm;
