import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getMemberChatRoomList } from "@/api/chat/getMemberChatRoomList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { MemberChatListType } from "@/types/chat";

export const useMemberChatRoomListQuery = (currentPage: number) => {
  const { data: memberChatRoomListData } = useSuspenseQuery<MemberChatListType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_CHAT_ROOM_LIST],
    queryFn: () => getMemberChatRoomList(currentPage),
  });

  return { memberChatRoomListData };
};
