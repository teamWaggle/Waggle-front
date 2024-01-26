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

export interface FormDataType {
	request: SignUpFormType;
}

export interface SignUpFormType {
	email: string;
	username: string;
	password: string;
	nickname: string;
	address: string;
	phone: string;
	profileImgUrl: string;
}

export interface SignUpResponseType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: number;
}
