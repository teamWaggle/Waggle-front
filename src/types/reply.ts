import { MemberType } from "@/types/auth";

export interface ReplyType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: ReplyResultType;
}

export interface ReplyResultType {
	replyList: ReplyListInfoType[];
	totalReplies: number;
	first: boolean;
	last: boolean;
}

export interface ReplyListInfoType {
	id: number;
	content: string;
	createdDate?: string;
	member: MemberType;
	mentionMembers?: string[];
	onClose?: () => void;
}
