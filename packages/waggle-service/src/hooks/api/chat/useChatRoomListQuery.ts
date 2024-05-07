import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getChatRoomList } from "@/api/chat/getChatRoomList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { ChatListType } from "@/types/chat";

export const useChatRoomListQuery = (currentPage: number) => {
  const { data: chatRoomListData } = useSuspenseQuery<ChatListType, AxiosError>({
    queryKey: [QUERY_KEYS.CHAT_ROOM_LIST],
    queryFn: () => getChatRoomList(currentPage),
  });

  return { chatRoomListData };
};
