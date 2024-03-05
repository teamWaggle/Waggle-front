import type { MemberType } from "@/types/auth";

export interface CommentType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: CommentResultType;
}

export interface CommentResultType {
	commentList: CommentListInfoType[];
	commentCount: number;
	isFirst: boolean;
	isLast: boolean;
}

export interface CommentListInfoType {
	commentId: number;
	content: string;
	createdDate: Date;
	mentionedMemberList?: string[];
	member: MemberType;
	isOwner: boolean;
}
