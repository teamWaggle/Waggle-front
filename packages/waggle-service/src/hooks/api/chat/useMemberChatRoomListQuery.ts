import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getMemberChatRoomList } from "@/api/chat/getMemberChatRoomList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { MemberChatListType } from "@/types/chat";

export const useMemberChatRoomListQuery = () => {
  const {
    data: memberChatRoomListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<MemberChatListType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_CHAT_ROOM_LIST],
    queryFn: ({ pageParam: currentPage }) => getMemberChatRoomList(currentPage),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { memberChatRoomListData, fetchNextPage, hasNextPage, isFetching };
};
