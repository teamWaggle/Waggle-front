import {
  useGetMemberScheduleMonthly,
  prefetchScheduleMonthly,
} from "@/hooks/api/schedule/useGetMemberScheduleMonthly";
import { isLoggedInState } from "@/recoil/atoms/auth";
import { getDate } from "@/utils/getDate";
import { addMonths, subMonths } from "date-fns";
import { useRecoilValue } from "recoil";

export const useCalendarSchedule = (currentDate: Date) => {
  const { getCurrentYear, getCurrentMonth } = getDate();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const currentYear = getCurrentYear(currentDate);
  const currentMonth = getCurrentMonth(currentDate);
  const currentNextYear = getCurrentYear(addMonths(currentDate, 1));
  const currentNextMonth = getCurrentMonth(addMonths(currentDate, 1));
  const currentPrevYear = getCurrentYear(subMonths(currentDate, 1));
  const currentPrevMonth = getCurrentMonth(subMonths(currentDate, 1));
  if (isLoggedIn) {
    const { data } = useGetMemberScheduleMonthly(currentYear, currentMonth);
    prefetchScheduleMonthly(currentNextYear, currentNextMonth);
    prefetchScheduleMonthly(currentPrevYear, currentPrevMonth);
    const { scheduleList } = data?.result || { scheduleList: [] };
    return scheduleList;
  }

  return [];
};
