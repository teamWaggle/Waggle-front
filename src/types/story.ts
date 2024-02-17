import type { MemberType } from "@/types/auth";

export interface StoryType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: StoryResultType;
}

export interface StoryResultType {
	id: number;
	content?: string;
	createdDate: string | Date;
	recommendCount?: number;
	recommend?: boolean;
	hashtags?: string[];
	medias: string[];
	member: MemberType;
}

export interface StoryListType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: StoryListResultType;
}

export interface StoryListResultType {
	storyList: StoryListInfoType[];
	totalStories: number;
	first: boolean;
	last: boolean;
}

export interface StoryListInfoType {
	id: number;
	createdDate?: string;
	thumbnail: string;
}
