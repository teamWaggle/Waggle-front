import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getNotificationList } from "@/api/notification/getNotificationList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { NotificationType } from "@/types/notification";

export const useNotificationListQuery = (currentPage: number) => {
  const { data: notificationListData } = useQuery<NotificationType, AxiosError>({
    queryKey: [QUERY_KEYS.NOTIFICATION_LIST],
    queryFn: () => getNotificationList(currentPage),
  });

  return { notificationListData };
};
