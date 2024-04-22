import type { HTTPError } from "@/api/HTTPError";
import { QUERY_KEYS } from "@/constants/queryKeys";
import type { CommonResponseResultBooleanType, DefaultApiResponseType } from "@/types/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ScheduleResultType } from "@/types/planning";
import { cancelMemberSchedule } from "@/api/schedule/cancelMemberSchedule";
import { toast } from "react-toastify";

// 현재 모든 데이터를 update하는 방식으로 구현되어 있어서, 성능을 생각했을 때 추후에는 수정이 필요할 수 있음
export const useCancelMemberSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation<CommonResponseResultBooleanType, HTTPError, number>({
    mutationKey: [QUERY_KEYS.CANCEL_MEMBER_SCHEDULE],
    mutationFn: (scheduleId: number) => cancelMemberSchedule(scheduleId),
    onMutate: async (scheduleId) => {
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
      toast.success("스케줄이 취소되었습니다.");
    },
  });
};
