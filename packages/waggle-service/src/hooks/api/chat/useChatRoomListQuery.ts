import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getChatRoomList } from "@/api/chat/getChatRoomList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { ChatListType } from "@/types/chat";

export const useChatRoomListQuery = () => {
  const {
    data: chatRoomListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<ChatListType, AxiosError>({
    queryKey: [QUERY_KEYS.CHAT_ROOM_LIST],
    queryFn: ({ pageParam: currentPage }) => getChatRoomList(currentPage),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { chatRoomListData, fetchNextPage, hasNextPage, isFetching };
};
