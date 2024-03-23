import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getReply } from "@/api/reply/getReply";

import type { ReplyType } from "@/types/reply";

export const useReplyQuery = (currentPage: number, commentId: number) => {
	const { data: replyData } = useQuery<ReplyType, AxiosError>({
		queryKey: ["reply", commentId],
		queryFn: () => getReply(currentPage, commentId),
	});

	return { replyData };
};
