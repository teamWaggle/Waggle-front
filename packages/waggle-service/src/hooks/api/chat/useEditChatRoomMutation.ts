import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putChatRoom } from "@/api/chat/putChatRoom";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useEditChatRoomMutation = (chatRoomId?: number) => {
  const queryClient = useQueryClient();

  const editChatRoomMutation = useMutation({
    mutationFn: putChatRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHAT_ROOM, chatRoomId] });
    },
  });

  return editChatRoomMutation;
};
