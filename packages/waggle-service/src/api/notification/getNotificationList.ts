import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { NotificationType } from "@/types/notification";

export const getNotificationList = async (currentPage: number) => {
  const { data } = await authorizedAxiosInstance.get<NotificationType>(
    END_POINTS.NOTIFICATION_LIST(currentPage)
  );

  return data;
};
