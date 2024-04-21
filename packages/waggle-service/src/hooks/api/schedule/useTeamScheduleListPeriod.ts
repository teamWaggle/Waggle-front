import type { HTTPError } from "@/api/HTTPError";
import { getTeamScheduleListPeriod } from "@/api/schedule/getTeamScheduleListPeriod";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import type { TeamScheduleInfoType } from "@/types/schedule";
import { useQuery } from "@tanstack/react-query";

export const useTeamScheduleListPeriod = ({ start, end }: { start: string; end: string }) => {
  const teamId = useParamsTeamId();
  return useQuery<TeamScheduleInfoType, HTTPError>({
    queryKey: [QUERY_KEYS.SCHEDULE_PERIOD],
    queryFn: () => {
      return getTeamScheduleListPeriod(teamId, start, end);
    },
    enabled: !!start && !!end,
  });
};
