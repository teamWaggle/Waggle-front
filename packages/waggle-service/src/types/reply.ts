import type { MemberType } from "@/types/auth";

export interface ReplyType {
  isSuccess: boolean;
  code: number;
  message: string;
  result: ReplyResultType;
}

export interface ReplyResultType {
  replyList: ReplyListInfoType[];
  replyCount: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface ReplyListInfoType extends EditCommentProps {
  replyId: number;
  content: string;
  createdDate: string;
  mentionedMemberList?: string[];
  member: MemberType;
}

interface EditCommentProps {
  handleReplyEditClick: (content: string, commentId: number) => void;
}

export interface PutReplyType extends ReplyRequestType {
  replyId: number;
}

export interface PostReplyType extends ReplyRequestType {
  commentId: number;
}

export interface ReplyRequestType {
  content: string;
  mentionedMemberList: string[];
}
