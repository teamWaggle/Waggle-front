import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getReply } from "@/api/reply/getReply";

import type { ReplyType } from "@/types/reply";

export const useReplyQuery = (currentPage: number, commentId: number) => {
	const queryFn: { reply: () => Promise<ReplyType> } = {
		reply: () => getReply(currentPage, commentId),
	};

	const { data } = useQuery<ReplyType, AxiosError>(["reply", commentId], queryFn.reply);

	return { replyData: data! };
};
