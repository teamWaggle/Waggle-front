import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

interface ChatRoomRequestType {
  name: string;
  description: string;
  password: string;
}

export const postChatRoom = async ({ name, description, password }: ChatRoomRequestType) => {
  return await authorizedAxiosInstance.post<ChatRoomRequestType, AxiosResponse<CommonResponseType>>(
    END_POINTS.CREATE_CHAT_ROOM,
    {
      name,
      description,
      password,
    }
  );
};
