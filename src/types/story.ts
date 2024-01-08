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
