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
	handleEditComment?: () => void;
}

export interface PutCommentType extends CommentRequestType {
	commentId: number;
}

export interface PostCommentType extends CommentRequestType {
	boardId: number;
}

export interface CommentRequestType {
	content: string;
	mentionedMemberList: string[];
}
