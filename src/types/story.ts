import type { MemberType } from "@/types/auth";
import type { CommonResponseBaseType } from "@/types/common";

export interface StoryType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: StoryResultType;
}

export interface StoryResultType {
	boardId: number;
	content: string;
	createdDate: string | Date;
	hashtagList: string[];
	mediaList: string[];
	member: MemberType;
	recommendationInfo: RecommendationInfoType;
}

export interface RecommendationInfoType {
	isRecommend: boolean;
	recommendCount: number;
}

export interface StoryListType extends CommonResponseBaseType {
	result: StoryListResultType;
}

export interface StoryListResultType {
	storyList: StoryListInfoType[];
	nextPageParam: number;
}

export interface StoryListInfoType {
	boardId: number;
	thumbnail: string;
}
