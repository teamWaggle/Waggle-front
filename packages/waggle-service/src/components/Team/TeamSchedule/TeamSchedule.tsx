import { Fragment, useState } from "react";
import type { FieldValues } from "react-hook-form";

import AddIcon from "@/assets/svg/add-icon.svg?react";

import {
  Box,
  Flex,
  Heading,
  Text,
  DatePicker,
  DatePickerCalendarModal,
  Form,
} from "@/components/common";
import Lock from "@/components/Team/TeamSchedule/Lock/Lock";
import AddTeamScheduleModal from "@/components/Team/TeamSchedule/Modal/AddTeamScheduleModal";
import TeamScheduleCard from "@/components/Team/TeamSchedule/TeamScheduleCard/TeamScheduleCard";
import * as yup from "yup";

import { TEAM_SCHEDULE_SEARCH_VALUES } from "@/constants/team";

import { useTeamScheduleListPage } from "@/hooks/schedule/useTeamScheduleListPage";
import useModal from "@/hooks/useModal";
import useObserver from "@/hooks/useObserver";
import { useParamsTeamId } from "@/hooks/useParamsTeamId";

import {
  teamScheduleAddButtonStyle,
  teamScheduleBoxStyle,
  teamScheduleGridBoxStyle,
  teamScheduleSearchButtonStyle,
  teamScheduleTitleStyle,
} from "@/components/Team/TeamSchedule/TeamSchedule.style";

const TeamSchedule = () => {
  const teamId = useParamsTeamId();
  const { openModal } = useModal();
  const [isMember] = useState(true);
  const { teamScheduleListData, fetchNextPage, hasNextPage, isFetching } =
    useTeamScheduleListPage(teamId);
  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });
  const handleAddSchedule = () => {
    openModal({
      key: "AddSchedule",
      component: () => <AddTeamScheduleModal teamId={teamId} />,
      isWhiteIcon: true,
      isOutsideClose: false,
    });
  };
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const schema = yup.object({
    startDate: yup.date(),
    endDate: yup.date(),
  });

  return (
    <>
      {isMember ? (
        <>
          <Flex css={teamScheduleBoxStyle}>
            <Flex style={{ alignItems: "center", gap: "16px" }}>
              <Heading size="xLarge" css={teamScheduleTitleStyle}>
                TEAM SCHEDULE
              </Heading>
              <Form schema={schema} onSubmit={onSubmit} defaultValues={TEAM_SCHEDULE_SEARCH_VALUES}>
                <Flex style={{ gap: "4px", alignItems: "center" }}>
                  <DatePicker name="startDate">
                    <DatePickerCalendarModal />
                  </DatePicker>
                  ~
                  <DatePicker name="endDate">
                    <DatePickerCalendarModal />
                  </DatePicker>
                  <Flex tag="button" css={teamScheduleSearchButtonStyle}>
                    <Text size="xSmall">일정 검색</Text>
                  </Flex>
                  <Flex tag="button" css={teamScheduleSearchButtonStyle}>
                    <Text size="xSmall">초기화</Text>
                  </Flex>
                </Flex>
              </Form>
            </Flex>
            <Flex
              onClick={handleAddSchedule}
              tag="button"
              css={teamScheduleAddButtonStyle("team_1")}
            >
              <Text size="xSmall">일정 추가</Text>
              <AddIcon />
            </Flex>
          </Flex>
          <Box css={teamScheduleGridBoxStyle}>
            {teamScheduleListData?.pages.map((teamScheduleData, page) => (
              <Fragment key={page}>
                {teamScheduleData.result.scheduleList.map((teamSchedule) => (
                  <TeamScheduleCard key={teamSchedule.boardId} teamScheduleData={teamSchedule} />
                ))}
              </Fragment>
            ))}
          </Box>
          <div ref={ref} />
        </>
      ) : (
        <Lock />
      )}
    </>
  );
};
export default TeamSchedule;
