import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const deleteChatRoomLeave = (chatRoomId?: number) => {
  return authorizedAxiosInstance.delete(END_POINTS.LEAVE_CHAT_ROOM(chatRoomId));
};
