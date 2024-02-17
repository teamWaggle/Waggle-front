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
	username: string;
	mentionMembers: string[];
}
