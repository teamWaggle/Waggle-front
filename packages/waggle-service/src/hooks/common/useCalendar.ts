import { useState } from "react";

import { addMonths, subMonths } from "date-fns";

import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import {
  prefetchScheduleMonthly,
  useGetMemberScheduleMonthly,
} from "@/hooks/api/schedule/useGetMemberScheduleMonthly";

import { getDate } from "@/utils/getDate";

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const { getCurrentYear, getCurrentMonth } = getDate();

  const currentYear = getCurrentYear(currentDate);
  const currentMonth = getCurrentMonth(currentDate);
  const currentNextYear = getCurrentYear(addMonths(currentDate, 1));
  const currentNextMonth = getCurrentMonth(addMonths(currentDate, 1));
  const currentPrevYear = getCurrentYear(subMonths(currentDate, 1));
  const currentPrevMonth = getCurrentMonth(subMonths(currentDate, 1));

  const { userUrl } = useMemberInfoSaveQuery();
  const { data } = useGetMemberScheduleMonthly(userUrl, currentYear, currentMonth);

  prefetchScheduleMonthly(userUrl, currentNextYear, currentNextMonth);
  prefetchScheduleMonthly(userUrl, currentPrevYear, currentPrevMonth);

  const { scheduleList } = data?.result || { scheduleList: [] };

  const editSelectedStartDate = (date: Date) => {
    setSelectedStartDate(date);
  };

  const editSelectedEndDate = (date: Date) => {
    setSelectedEndDate(date);
  };

  const handlePrevDate = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextDate = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const editCurrentDate = (date: Date) => {
    setCurrentDate(date);
  };

  return {
    scheduleList,
    currentDate,
    editCurrentDate,
    selectedStartDate,
    selectedEndDate,
    handlePrevDate,
    handleNextDate,
    editSelectedStartDate,
    editSelectedEndDate,
  };
};
export default useCalendar;
