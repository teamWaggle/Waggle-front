import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";
import type { ChatRoomRequestType } from "@/api/chat/postChatRoom";

interface putChatRoomRequestType extends ChatRoomRequestType {
  chatRoomId?: number;
}

export const putChatRoom = async ({
  name,
  description,
  password,
  chatRoomId,
}: putChatRoomRequestType) => {
  return await authorizedAxiosInstance.put<ChatRoomRequestType, AxiosResponse<CommonResponseType>>(
    END_POINTS.CHAT_ROOM(chatRoomId),
    { name, description, password }
  );
};
