import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteChatRoom } from "@/api/chat/deleteChatRoom";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useDeleteChatRoomMutation = () => {
  const queryClient = useQueryClient();

  const deleteChatRoomMutation = useMutation({
    mutationFn: deleteChatRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHAT_ROOM_LIST] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBER_CHAT_ROOM_LIST] });
      toast.success("채팅방이 삭제되었습니다");
    },
  });

  return deleteChatRoomMutation;
};
