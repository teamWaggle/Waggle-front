import type { MemberType } from "@/types/auth";
import type { CommonResponseBaseType } from "@/types/common";

export interface CommentType {
  isSuccess: boolean;
  code: number;
  message: string;
  result: CommentResultType;
}

export interface CommentResultType {
  commentList: CommentListInfoType[];
  nextPageParam: number;
}

export interface CommentDataType extends EditCommentProps {
  commentData: CommentListInfoType;
}

export interface CommentListInfoType {
  commentId: number;
  content: string;
  createdDate: Date;
  mentionedMemberList?: string[];
  member: MemberType;
  title?: string;
  status?: "RESOLVED" | "UNRESOLVED";
  category?: "FIND_PET" | "FIND_OWNER" | "PROTECT" | "ETC";
}

interface EditCommentProps {
  handleEditClick?: (content: string, commentId: number) => void;
}

export interface PutCommentType extends CommentRequestType {
  commentId: number;
}

export interface PostCommentType extends CommentRequestType {
  boardId?: number;
}

export interface CommentRequestType {
  content: string;
  mentionedMemberList: string[];
}

export interface MemberCommentType extends CommonResponseBaseType {
  result: { commentList: MemberCommentListInfoType[]; nextPageParam: number };
}

export interface MemberCommentListInfoType {
  commentId: number;
  content: string;
  title: string;
  status: "RESOLVED" | "UNRESOLVED";
  category: "FIND_PET" | "FIND_OWNER" | "PROTECT" | "ETC";
  createdDate: Date;
  member: MemberType;
}
