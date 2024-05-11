import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getChatMessageList } from "@/api/chat/getChatMessageList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { ChatMessageListType } from "@/types/chat";

export const useChatMessageListQuery = (chatRoomId?: number) => {
  const {
    data: chatMessageListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<ChatMessageListType, AxiosError>({
    queryKey: [QUERY_KEYS.CHAT_MESSAGE_LIST, chatRoomId],
    queryFn: ({ pageParam: currentPage }) => getChatMessageList(currentPage, chatRoomId),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { chatMessageListData, fetchNextPage, hasNextPage, isFetching };
};
