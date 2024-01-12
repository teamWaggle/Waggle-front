export interface SirenType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: SirenResultType;
}

export interface SirenResultType {
	id?: number;
	title?: string;
	petKind?: string;
	petAge?: number;
	petGender?: string;
	contact?: string;
	lostDate?: string;
	lostLocate?: string;
	content?: string;
	category?: string;
	medias?: string[];
	username?: string;
	profileImg?: string;
	recommendIt?: boolean;
	recommendCount?: number;
}

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
