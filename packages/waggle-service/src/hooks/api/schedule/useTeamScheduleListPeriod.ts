import type { HTTPError } from "@/api/HTTPError";
import { getTeamScheduleListPeriod } from "@/api/schedule/getTeamScheduleListPeriod";
import { getTeamScheduleListPeriodAuth } from "@/api/schedule/getTeamScheduleListPeriodAuth";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import { isLoggedInState } from "@/recoil/atoms/auth";
import type { TeamScheduleInfoType } from "@/types/schedule";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

export const useTeamScheduleListPeriod = ({ start, end }: { start: string; end: string }) => {
  const teamId = useParamsTeamId();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  return useQuery<TeamScheduleInfoType, HTTPError>({
    queryKey: [QUERY_KEYS.SCHEDULE_PERIOD],
    queryFn: () =>
      isLoggedIn
        ? getTeamScheduleListPeriodAuth(teamId, start, end)
        : getTeamScheduleListPeriod(teamId, start, end),

    enabled: !!start && !!end && !!isLoggedIn,
  });
};
