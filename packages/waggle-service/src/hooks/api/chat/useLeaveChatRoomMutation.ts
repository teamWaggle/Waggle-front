import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteChatRoomLeave } from "@/api/chat/deleteChatRoomLeave";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useLeaveChatRoomMutation = () => {
  const queryClient = useQueryClient();

  const leaveChatRoomMtation = useMutation({
    mutationFn: deleteChatRoomLeave,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBER_CHAT_ROOM_LIST] });
    },
  });

  return leaveChatRoomMtation;
};
