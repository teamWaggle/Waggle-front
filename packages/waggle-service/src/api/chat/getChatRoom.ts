import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { ChatType } from "@/types/chat";

export const getChatRoom = async (chatRoomId?: number) => {
  const { data } = await axiosInstance.get<ChatType>(END_POINTS.CHAT_ROOM(chatRoomId));

  return data;
};
