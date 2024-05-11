import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { ChatMessageListType } from "@/types/chat";

export const getChatMessageList = async (currentPage: unknown, chatRoomId?: number) => {
  const { data } = await authorizedAxiosInstance.get<ChatMessageListType>(
    END_POINTS.CHAT_MESSAGE_LIST(currentPage, chatRoomId)
  );

  return data;
};
