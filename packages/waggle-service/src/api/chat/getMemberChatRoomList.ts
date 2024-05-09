import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { MemberChatListType } from "@/types/chat";

export const getMemberChatRoomList = async (currentPage: number) => {
  const { data } = await authorizedAxiosInstance.get<MemberChatListType>(
    END_POINTS.MEMBER_CHAT_ROOM_LIST(currentPage)
  );

  return data;
};
