import type { MemberType } from "@/types/auth";
import type { CommonResponseBaseType } from "@/types/common";

export interface QuestionType extends CommonResponseBaseType {
  result: QuestionResultType;
}

export interface QuestionResultType extends QuestionFormData {
  boardId: number;
  recommendCount: number;
  member: MemberType;
  viewCount: number;
  createdDate: Date;
  status: string;
}

export interface QuestionFormData {
  title: string;
  content: string;
  hashtagList: string[];
  mediaList: string[];
}

export interface QuestionTitleType extends QuestionDataType {
  handleEditQuestion?: () => void;
  handleDeleteQuestion?: () => void;
}

export interface QuestionDataType {
  questionData: QuestionResultType;
}

export interface QuestionListDataType {
  questionListData: QuestionListInfoType;
}

export interface QuestionListType extends CommonResponseBaseType {
  result: QuestionListResultType;
}

export interface QuestionListResultType {
  questionList: QuestionListInfoType[];
  nextPageParam: number;
}

export interface QuestionListInfoType {
  boardId: number;
  title: string;
  content: string;
  status: string;
  createdDate: string;
  hashtagList: string[];
  recommendCount: number;
}

export interface QuestionRepresentativeType extends CommonResponseBaseType {
  result: QuestionRepresentativeResultType;
}

export interface QuestionRepresentativeResultType {
  questionList: QuestionListInfoType[];
}
