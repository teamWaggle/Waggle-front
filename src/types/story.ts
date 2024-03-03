import type { MemberType } from "@/types/auth";

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
	isOwner: boolean;
	hashtagList: string[];
	mediaList: string[];
	member: MemberType;
	recommendationInfo: RecommendationInfoType;
}

export interface RecommendationInfoType {
	isRecommend: boolean;
	recommendCount: number;
}

export interface StoryListType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: StoryListResultType;
}

export interface StoryListResultType {
	storyList: StoryListInfoType[];
	storyCount: number;
	isFirst: boolean;
	isLast: boolean;
}

export interface StoryListInfoType {
	boardId: number;
	thumbnail: string;
}
