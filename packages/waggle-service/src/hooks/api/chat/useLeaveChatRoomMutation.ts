import { useMutation } from "@tanstack/react-query";

import { deleteChatRoomLeave } from "@/api/chat/deleteChatRoomLeave";

export const useLeaveChatRoomMutation = () => {
  const leaveChatRoomMtation = useMutation({
    mutationFn: deleteChatRoomLeave,
  });

  return leaveChatRoomMtation;
};
