import type { CommonResponseBaseType } from "@/types/common";
import type { RecommendationInfoType } from "@/types/story";

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
