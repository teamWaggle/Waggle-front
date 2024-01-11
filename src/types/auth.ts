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
	username: string;
	password: string;
}
