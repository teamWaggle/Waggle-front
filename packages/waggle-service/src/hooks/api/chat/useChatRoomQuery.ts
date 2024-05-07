import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getChatRoom } from "@/api/chat/getChatRoom";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { ChatType } from "@/types/chat";

export const useChatRoomQuery = (chatRoomId: number) => {
  const { data: chatRoomData } = useSuspenseQuery<ChatType, AxiosError>({
    queryKey: [QUERY_KEYS.CHAT_ROOM, chatRoomId],
    queryFn: () => getChatRoom(chatRoomId),
  });

  return { chatRoomData };
};
