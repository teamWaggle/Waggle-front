import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postChatRoom } from "@/api/chat/postChatRoom";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePostChatRoomMutation = () => {
  const queryClient = useQueryClient();

  const postChatRoomMutation = useMutation({
    mutationFn: postChatRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHAT_ROOM_LIST] });
    },
  });

  return postChatRoomMutation;
};
