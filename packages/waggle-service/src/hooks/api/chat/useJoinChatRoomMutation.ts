import { useMutation } from "@tanstack/react-query";

import { postChatRoomJoin } from "@/api/chat/postChatRoomJoin";

export const useJoinChatRoomMutation = () => {
  const joinChatRoomMutation = useMutation({
    mutationFn: postChatRoomJoin,
  });

  return joinChatRoomMutation;
};
