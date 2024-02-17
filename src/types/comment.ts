import type { MemberType } from "@/types/auth";

export interface CommentType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: CommentResultType;
}

export interface CommentResultType {
	commentList: CommentListInfoType[];
	totalQuestions: number;
	first: boolean;
	last: boolean;
}

export interface CommentListInfoType {
	id: number;
	content: string;
	createdDate: string;
	mentionedNickname?: string[];
	member: MemberType;
}
