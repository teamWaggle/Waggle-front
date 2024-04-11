import type { FieldValues } from "react-hook-form";

import AddIcon from "@/assets/svg/add-icon.svg?react";

import { Box, Flex, Form, Heading, Text } from "@/components/common";
import * as yup from "yup";

import { TEAM_SCHEDULE_DEFAULT_VALUES, TEAM_TITLE } from "@/constants/team";
import { TEAM_CONTENT } from "@/constants/team";

import { useAddTeamSchedule } from "@/hooks/schedule/useAddTeamSchedule";
import useModal from "@/hooks/useModal";

import { convertToTeamScheduleDataFormat } from "@/utils/convertToTeamScheduleDataFormat";

import {
  TeamScheduleModalAddButtonStyle,
  addTeamScheduleModalBoxStyle,
  addTeamScheduleModalContentBoxStyle,
  addTeamScheduleModalContentTitleStyle,
  addTeamScheduleModalInputStyle,
  addTeamScheduleModalTextAreaStyle,
  addTeamScheduleModalTitleBoxStyle,
  addTeamScheduleTitleCircleStyle,
} from "@/components/Team/TeamSchedule/Modal/AddTeamScheduleModal.style";

const schema = yup.object({
  title: TEAM_TITLE.RULES(),
  content: TEAM_CONTENT.RULES(),
  startDate: yup
    .date()
    .min(new Date(new Date().setHours(0, 0, 0, 0)), "시작일은 오늘 혹은 이후여야 합니다."),
  endDate: yup.date().min(yup.ref("startDate"), "종료일은 시작일이거나 이후여야 합니다."),
  startTime: yup.date(),
  endTime: yup.date().min(yup.ref("startTime"), "종료시간은 시작시간 이후여야 합니다."),
});

const AddTeamScheduleModal = ({ teamId }: { teamId: number }) => {
  const { closeModal } = useModal();

  const { mutate: addTeamSchedule } = useAddTeamSchedule(teamId);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const convertedTeamScheduleData = convertToTeamScheduleDataFormat(data);
    addTeamSchedule(convertedTeamScheduleData, {
      onSuccess: () => {
        closeModal();
      },
    });
  };
  return (
    <Flex css={addTeamScheduleModalBoxStyle}>
      <Box css={addTeamScheduleModalTitleBoxStyle("team_1")}>
        <Flex style={{ alignItems: "center" }}>
          <Box css={addTeamScheduleTitleCircleStyle} />
          <Text size="xLarge">team name</Text>
        </Flex>
        <Heading size="medium">일정 추가</Heading>
      </Box>
      <Box css={addTeamScheduleModalContentBoxStyle}>
        <Form onSubmit={onSubmit} defaultValues={TEAM_SCHEDULE_DEFAULT_VALUES} schema={schema}>
          <Box style={{ marginBottom: "16px" }}>
            <Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
              일정 이름
            </Heading>
            <Form.TitleInputField
              name="title"
              validateText="한영 30자 제한, 특수문자 불가"
              placeholder="일정의 이름을 입력해주세요"
              inputStyle={addTeamScheduleModalInputStyle}
            />
          </Box>
          <Box style={{ marginBottom: "16px" }}>
            <Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
              기간
            </Heading>
            <Flex style={{ flexDirection: "column", marginTop: "8px" }}>
              <Form.DateRangeInputField />
            </Flex>
          </Box>
          <Box style={{ marginBottom: "16px" }}>
            <Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
              반복 시간
            </Heading>
            <Flex style={{ flexDirection: "column", marginTop: "8px" }}>
              <Form.TimeRangeInputField />
            </Flex>
          </Box>
          <Box style={{ marginBottom: "16px" }}>
            <Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
              일정 설명
            </Heading>
            <Form.ContentInputField
              name="content"
              validateText="한영 200자 제한, 특수문자 불가"
              placeholder="일정의 설명을 입력해주세요"
              inputStyle={addTeamScheduleModalTextAreaStyle}
            />
          </Box>
          <Flex style={{ justifyContent: "end" }}>
            <button type="submit" css={TeamScheduleModalAddButtonStyle("team_1")}>
              <Text size="xSmall">일정 추가</Text>
              <AddIcon />
            </button>
          </Flex>
        </Form>
      </Box>
    </Flex>
  );
};
export default AddTeamScheduleModal;
