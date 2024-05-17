import { Fragment, useEffect, useState } from "react";
import type { FieldValues } from "react-hook-form";
import AddIcon from "@/assets/svg/add-icon.svg?react";

import { Box, Flex, Heading, Text, Spinner, Button } from "waggle-design-system";
import Lock from "@/components/Team/TeamSchedule/Lock/Lock";
import TeamScheduleCard from "@/components/Team/TeamSchedule/TeamScheduleCard/TeamScheduleCard";
import * as yup from "yup";
import ResetIcon from "@/assets/svg/reset.svg?react";
import { TEAM_SCHEDULE_SEARCH_VALUES } from "@/constants/team";
import { useTeamScheduleListPage } from "@/hooks/api/schedule/useTeamScheduleListPage";
import useModal from "@/hooks/common/useModal";
import useObserver from "@/hooks/common/useObserver";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import {
  teamScheduleAddButtonStyle,
  teamScheduleGridBoxStyle,
  teamScheduleSearchButtonStyle,
  teamScheduleTitleStyle,
} from "@/components/Team/TeamSchedule/TeamSchedule.style";
import { getDate } from "@/utils/getDate";

import { useTeamScheduleListPeriod } from "@/hooks/api/schedule/useTeamScheduleListPeriod";

import AddTeamScheduleModal from "@/components/Team/TeamSchedule/Modal/AddTeamScheduleModal";
import { useTeamInfo } from "@/hooks/api/team/useTeamInfo";
import { DatePicker, DatePickerCalendarModal, Form } from "@/components/common";

const TeamSchedule = () => {
  const { getYearMonthDay } = getDate();
  const teamId = useParamsTeamId();
  const { openModal } = useModal();
  const [isMember] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const { teamScheduleListData, fetchNextPage, hasNextPage, isFetching } =
    useTeamScheduleListPage(teamId);
  const [period, setPeriod] = useState({ start: "", end: "" });
  const { data: TeamScheduleListPeriod, refetch, isLoading } = useTeamScheduleListPeriod(period);
  const { name: teamName, teamColor } = useTeamInfo(teamId);
  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });
  const handleAddSchedule = () => {
    openModal({
      key: "AddSchedule",
      component: () => (
        <AddTeamScheduleModal teamColor={teamColor} teamName={teamName} teamId={teamId} />
      ),
      isWhiteIcon: true,
      isOutsideClose: false,
    });
  };

  const handleResetButton = () => {
    setIsSearch(false);
  };

  const onSubmit = (data: FieldValues) => {
    data.startDate = getYearMonthDay(data.startDate);
    data.endDate = getYearMonthDay(data.endDate);

    setPeriod({ start: data.startDate, end: data.endDate });
    setIsSearch(true);
  };

  const schema = yup.object({
    startDate: yup.date(),
    endDate: yup.date().min(yup.ref("startDate"), "종료일은 시작일 이후여야 합니다."),
  });

  useEffect(() => {
    if (period.end && period.start) refetch();
  }, [period]);

  return (
    <>
      {isMember ? (
        <>
          <Flex styles={{ justify: "space-between", align: "center", marginTop: "20px" }}>
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
                  <button type="submit" css={teamScheduleSearchButtonStyle}>
                    <Text size="xSmall">일정 검색</Text>
                  </button>
                  <Form.ResetButton onClick={handleResetButton}>
                    <Flex tag="button" css={teamScheduleSearchButtonStyle}>
                      <ResetIcon />
                    </Flex>
                  </Form.ResetButton>
                </Flex>
              </Form>
            </Flex>
            <Button onClick={handleAddSchedule} css={teamScheduleAddButtonStyle("team_1")}>
              일정 추가
              <AddIcon />
            </Button>
          </Flex>
          {isLoading && (
            <Flex
              style={{
                height: "300px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Spinner />
            </Flex>
          )}
          <Box css={teamScheduleGridBoxStyle}>
            {!isSearch
              ? teamScheduleListData?.pages.map((teamScheduleData, page) => (
                  <Fragment key={page}>
                    {teamScheduleData.result.scheduleList.map((teamSchedule) => (
                      <TeamScheduleCard
                        key={teamSchedule.boardId}
                        teamScheduleData={teamSchedule}
                      />
                    ))}
                  </Fragment>
                ))
              : TeamScheduleListPeriod?.result.scheduleList.map((teamSchedule) => (
                  <TeamScheduleCard key={teamSchedule.boardId} teamScheduleData={teamSchedule} />
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
