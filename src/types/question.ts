import type { MemberType } from "@/types/auth";
import type { CommonResponseBaseType } from "@/types/common";
import type { RecommendationInfoType } from "@/types/story";

export interface QuestionType extends CommonResponseBaseType {
	result: QuestionResultType;
}

export interface QuestionResultType {
	boardId: number;
	title: string;
	status: string;
	content: string;
	createDate: string;
	mediaList: string[];
	hashtagList: string[];
	member: MemberType;
	recommendationInfo: RecommendationInfoType;
	viewCount: number;
}

export interface QuestionListType extends CommonResponseBaseType {
	result: QuestionListResultType;
}

export interface QuestionListResultType {
	questionList: QuestionListInfoType[];
	questionCount: number;
	isFirst: boolean;
	isLast: boolean;
}

export interface QuestionListInfoType {
	boardId: number;
	title: string;
	status: string;
	createdDate: string;
	hashtagList: string[];
	recommendationInfo: RecommendationInfoType;
}
