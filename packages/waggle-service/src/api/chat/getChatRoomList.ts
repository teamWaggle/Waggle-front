import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { ChatType } from "@/types/chat";

export const getChatRoomList = async (currentPage: number) => {
  const { data } = await axiosInstance.get<ChatType>(END_POINTS.CHAT_ROOM_LIST(currentPage));

  return data;
};
