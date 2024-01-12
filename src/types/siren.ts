export interface SirenListType {
	isSuccess: boolean;
	code: number;
	message: number;
	result: SirenListResultType;
}

export interface SirenListResultType {
	helpList: SirenListInfoType[];
	totalHelps: number;
	first: boolean;
	last: boolean;
}

export interface SirenListInfoType {
	id: number;
	title: string;
	thumbnail: string;
	lostDate: string;
	lostLocate: string;
	recommendIt?: boolean;
	recommendCount: number;
	category?: string;
	username?: string;
	profileImg?: string;
}
