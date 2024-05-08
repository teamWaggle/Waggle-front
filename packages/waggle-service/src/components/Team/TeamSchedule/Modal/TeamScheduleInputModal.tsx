import type { FieldValues } from "react-hook-form";

import AddIcon from "@/assets/svg/add-icon.svg?react";

import { Box, Flex, Heading, Text } from "waggle-design-system";
import type * as yup from "yup";

import {
  TeamScheduleModalAddButtonStyle,
  addTeamScheduleModalBoxStyle,
  addTeamScheduleModalContentBoxStyle,
  addTeamScheduleModalContentTitleStyle,
  addTeamScheduleModalInputStyle,
  addTeamScheduleModalTextAreaStyle,
  addTeamScheduleModalTitleBoxStyle,
  addTeamScheduleTitleCircleStyle,
} from "@/components/Team/TeamSchedule/Modal/TeamScheduleInputModal.style";
import type { TeamColorType } from "@/types/team";
import { Form } from "@/components/common";
import type { TeamScheduleInputType } from "@/types/schedule";

const TeamScheduleInputModal = ({
  modalTitle,
  handleSubmit,
  defaultValues,
  teamName,
  teamColor,
  schema,
}: {
  modalTitle: string;
  teamColor: TeamColorType;
  handleSubmit: (data: FieldValues) => void;
  defaultValues: FieldValues;
  teamName: string;
  schema: yup.ObjectSchema<TeamScheduleInputType<Date | undefined>>;
}) => {
  const onSubmit = (data: FieldValues) => {
    handleSubmit(data);
  };
  return (
    <Flex
      styles={{
        direction: "column",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        width: "600px",
      }}
      css={addTeamScheduleModalBoxStyle}
    >
      <Box css={addTeamScheduleModalTitleBoxStyle(teamColor)}>
        <Flex style={{ alignItems: "center" }}>
          <Box css={addTeamScheduleTitleCircleStyle} />
          <Text size="xLarge">{teamName}</Text>
        </Flex>
        <Heading size="medium">{modalTitle}</Heading>
      </Box>
      <Box css={addTeamScheduleModalContentBoxStyle}>
        <Form onSubmit={onSubmit} defaultValues={defaultValues} schema={schema}>
          <Box style={{ marginBottom: "16px" }}>
            <Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
              일정 이름
            </Heading>
            <Form.TextInputField
              name="title"
              validateText="한영 30자 제한, 특수문자 불가"
              placeholder="일정의 이름을 입력해주세요"
              inputStyle={addTeamScheduleModalInputStyle}
            />
          </Box>
          <Flex style={{ gap: "16px" }}>
            <Box style={{ marginBottom: "16px", height: "100px" }}>
              <Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
                시작 날짜 및 시간
              </Heading>
              <Flex style={{ gap: "8px" }}>
                <Form.DateRangeInputField dateName="startDate" TimeName="startTime" />
              </Flex>
            </Box>
            <Box style={{ marginBottom: "16px", height: "100px" }}>
              <Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
                종료 날짜 및 시간
              </Heading>
              <Flex style={{ gap: "8px" }}>
                <Form.DateRangeInputField dateName="endDate" TimeName="endTime" />
              </Flex>
            </Box>
          </Flex>
          <Box style={{ marginBottom: "16px" }}>
            <Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
              일정 설명
            </Heading>
            <Form.TextInputField
              name="content"
              isContent
              validateText="한영 200자 제한, 특수문자 불가"
              placeholder="일정의 설명을 입력해주세요"
              inputStyle={addTeamScheduleModalTextAreaStyle}
            />
          </Box>
          <Flex style={{ justifyContent: "end" }}>
            <button type="submit" css={TeamScheduleModalAddButtonStyle("team_1")}>
              <Text size="xSmall">{modalTitle}</Text>
              <AddIcon />
            </button>
          </Flex>
        </Form>
      </Box>
    </Flex>
  );
};
export default TeamScheduleInputModal;
