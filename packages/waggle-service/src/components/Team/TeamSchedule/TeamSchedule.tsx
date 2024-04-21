import { Fragment, useEffect, useState } from "react";
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
import useModal from "@/hooks/common/useModal";
import useObserver from "@/hooks/common/useObserver";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import {
  teamScheduleAddButtonStyle,
  teamScheduleBoxStyle,
  teamScheduleGridBoxStyle,
  teamScheduleSearchButtonStyle,
  teamScheduleTitleStyle,
} from "@/components/Team/TeamSchedule/TeamSchedule.style";
import { getDate } from "@/utils/getDate";

import { useTeamScheduleListPeriod } from "@/hooks/api/schedule/useTeamScheduleListPeriod";
import Spinner from "@/components/common/Design/Spinner/Spinner";

const TeamSchedule = () => {
  const { getYearMonthDay } = getDate();
  const teamId = useParamsTeamId();
  const { openModal } = useModal();
  const [isMember] = useState(true);
  const { teamScheduleListData, fetchNextPage, hasNextPage, isFetching } =
    useTeamScheduleListPage(teamId);
  const [period, setPeriod] = useState({ start: "", end: "" });
  const [isSearch, setIsSearch] = useState(false);
  const { data: TeamScheduleListPeriod, refetch, isLoading } = useTeamScheduleListPeriod(period);
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
                  <button type="submit" css={teamScheduleSearchButtonStyle}>
                    <Text size="xSmall">일정 검색</Text>
                  </button>
                  <Form.ResetButton onClick={handleResetButton}>
                    <Flex tag="button" css={teamScheduleSearchButtonStyle}>
                      <Text size="xSmall">초기화</Text>
                    </Flex>
                  </Form.ResetButton>
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
