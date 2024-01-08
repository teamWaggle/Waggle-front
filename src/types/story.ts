export interface StoryType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: StoryResultType;
}

export interface StoryResultType {
	id: number;
	content: string;
	username: string;
	profileImg: string;
	createdDate: string;
	recoomendCount: number;
	recommendIt: boolean;
	hashtags: string[];
	medias: string[];
}

export interface StoryListType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: StoryListResultType;
}

export interface StoryListResultType {
	storyList: StoryListInfoType[];
	totalQuestions: number;
	first: boolean;
	last: boolean;
}

export interface StoryListInfoType {
	id: number;
	username: string;
	profileImg: string;
	createdData: string;
	thumbnail: string;
	recommendCount: number;
	recommendIt: boolean;
	hashtags: string[];
}
