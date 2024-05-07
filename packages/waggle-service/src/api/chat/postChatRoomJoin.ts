import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

interface ChatRoomJoinRequestType {
  chatRoomId: number;
  password: string;
}

export const postChatRoomJoin = async ({ chatRoomId, password }: ChatRoomJoinRequestType) => {
  return await authorizedAxiosInstance.post<
    ChatRoomJoinRequestType,
    AxiosResponse<CommonResponseType>
  >(END_POINTS.JOIN_CHAT_ROOM(chatRoomId, password));
};
