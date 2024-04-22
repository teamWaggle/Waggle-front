import type { HTTPError } from "@/api/HTTPError";
import { deleteTeamSchedule } from "@/api/schedule/deleteTeamSchedule";
import { QUERY_KEYS } from "@/constants/queryKeys";
import type { DefaultApiResponseType } from "@/types/common";
import type { ScheduleResultType } from "@/types/planning";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useDeleteTeamSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.DELETE_TEAM_SCHEDULE],
    mutationFn: (scheduleId: number) => deleteTeamSchedule(scheduleId),
    onMutate: async (scheduleId: number) => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY],
      });

      const previousStartDateData = queryClient.getQueriesData({
        queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY],
      });
      queryClient.setQueriesData<DefaultApiResponseType<ScheduleResultType>>(
        {
          queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY],
        },
        (oldData) => {
          const tempData = {
            isSuccess: oldData?.isSuccess,
            code: oldData?.code,
            message: oldData?.message,
            result: {
              ...oldData?.result,
              scheduleList: oldData?.result?.scheduleList?.filter(
                (schedule) => schedule.boardId !== scheduleId
              ),
            },
          };
          return tempData as DefaultApiResponseType<ScheduleResultType>;
        }
      );

      return { previousStartDateData };
    },
    onError: (_e: HTTPError, _v: number, context: unknown) => {
      if ((context as { previousStartDateData?: unknown })?.previousStartDateData) {
        queryClient.setQueriesData(
          { queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY] },
          { updater: () => (context as { previousStartDateData?: unknown }).previousStartDateData }
        );
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TEAM_SCHEDULE_PAGE],
      });
      toast.success("스케줄이 삭제되었습니다.");
    },
  });
};
