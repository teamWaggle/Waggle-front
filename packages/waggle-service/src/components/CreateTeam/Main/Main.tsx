import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";

import { Box, Flex, Form, Heading, Text } from "@/components/common";
import * as yup from "yup";

import { TEAM_CONTENT, TEAM_DEFAULT_VALUES, TEAM_TITLE } from "@/constants/team";

import { useCreateTeam } from "@/hooks/api/team/useCreateTeam";
import { useSingleImgUpload } from "@/hooks/useSingleImgUpload";

import {
  colorTitleStyle,
  contentTextareaStyle,
  headingStyle,
  leftArrowIconStyle,
  submitButtonStyle,
  teamContentBox,
  textInputBoxStyle,
  titleBoxStyle,
  titleTextInputStyle,
} from "@/components/CreateTeam/Main/Main.style";
const schema = yup
  .object({
    name: TEAM_TITLE.RULES(),
    description: TEAM_CONTENT.RULES(),
  })
  .required();

const Main = () => {
  const navigate = useNavigate();
  const { mutate: createTeamMutate } = useCreateTeam();
  const { convertToMediaUrl, uploadMedia } = useSingleImgUpload({});

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    if (data.coverImageUrl) {
      convertToMediaUrl(data.coverImageUrl);
      data.coverImageUrl = uploadMedia;
    }
    formData.append("createTeamRequest", JSON.stringify(data));
    createTeamMutate(formData);
    navigate(-1);
  };
  return (
    <>
      <Flex css={titleBoxStyle}>
        <LeftArrowIcon css={leftArrowIconStyle} onClick={() => navigate(-1)} />
        <Heading css={headingStyle} size="xLarge">
          PLANNING - 팀 만들기
        </Heading>
      </Flex>
      <Form onSubmit={onSubmit} defaultValues={TEAM_DEFAULT_VALUES} schema={schema}>
        <Flex css={teamContentBox}>
          <Form.ImageInputField name="coverImageUrl" />
          <Flex css={textInputBoxStyle}>
            <Form.TitleInputField
              inputStyle={titleTextInputStyle}
              placeholder={TEAM_TITLE.PLACEHOLDER}
              name={TEAM_TITLE.NAME}
              validateText={TEAM_TITLE.VALIDATE_TEXT()}
            />
            <Form.ContentInputField
              inputStyle={contentTextareaStyle}
              placeholder={TEAM_CONTENT.PLACEHOLDER}
              name={TEAM_CONTENT.NAME}
              validateText={TEAM_CONTENT.VALIDATE_TEXT()}
            />
          </Flex>
        </Flex>
        <Box>
          <Text css={colorTitleStyle}>팀 대표 컬러</Text>
          <Form.ColorRadioInputField name="teamColor" />
          <button css={submitButtonStyle} type="submit">
            팀 생성하기
          </button>
        </Box>
      </Form>
    </>
  );
};
export default Main;
