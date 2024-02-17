export interface TokenType {
	code: number;
	isSuccess: boolean;
	message: string;
	result: ResultType;
}

export interface ResultType {
	accessToken: string;
	grantType: string;
	refreshToken: string;
}

export interface UserType {
	email: string;
	password: string;
}

export interface EmailAuthVerifyType {
	email: string;
	authCode: string;
}

export interface SignUpResponseType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: number;
}

export interface MemberType {
	id: number;
	nickname: string;
	profileImgUrl: string;
	userUrl: string;
}
