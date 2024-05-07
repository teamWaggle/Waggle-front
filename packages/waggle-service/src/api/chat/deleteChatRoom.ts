import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const deleteChatRoom = (chatRoomId?: number) => {
  return authorizedAxiosInstance.delete(END_POINTS.CHAT_ROOM(chatRoomId));
};
