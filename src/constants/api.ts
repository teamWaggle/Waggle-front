export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const END_POINTS = {
	TOKEN: "/api/tokens/refresh",
	LOGIN: "/api/tokens",
	SIGN_UP: "/api/members",
	EMAIL_AUTH_SEND: "/api/members/email/send",
	EMAIL_AUTH_VERIFY: "/api/members/email/verify",
	PASSWORD_AUTH_VERIFY: "/api/members/email/verify/password",
	MEMBER_INFO_FIRST: "/api/members/info",
	CHANGE_PASSWORD: (memberId: number) => `/api/members/${memberId}/password`,
	FIND_EMAIL: (name: string, birthday: string) =>
		`/api/members/email/find?name=${name}&birthday=${birthday}`,
	CHECK_NICKNAME: (nickname: string) => `/api/members/check-nickname?nickname=${nickname}`,
	CHECK_USERURL: (userUrl: string) => `/api/members/check-user-url?userUrl=${userUrl}`,
	CHECK_EMAIL: (email: string) => `/api/members/check-email?email=${email}`,
	STORY: (storyId: number) => `/api/stories/${storyId}`,
	STORY_LIST: (currentPage: number) => `/api/stories?currentPage=${currentPage}`,
	UPLOAD_STORY: "/api/stories",
	COMMENT: (currentPage: number, boardId: number) =>
		`/api/comments/page/${boardId}?curretPage=${currentPage}`,
	SIREN: (boardId: number) => `/api/helps/${boardId}`,
	SIREN_LIST: (curretPage: number) => `/api/helps?currentPage=${curretPage}`,
	REPLY: (currentPage: number, commentId: number) =>
		`/api/replies/${commentId}?currentPage=${currentPage}`,
	PET: "/api/pets",
};

export const HTTP_STATUS_CODE = {
	SUCCESS: 200,
	CREATED: 201,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
} as const;

// 토큰 만료 에러 코드 추가 예정
export const ERROR_CODE = {
	INVALID_REFRESH_TOKEN: 4050,
	MISMATCH_REFRESH_TOKEN: 4051,
	INVALID_TOKEN: 4052,
	UNAUTHORIZED_MEMBER: 4053,
	TOKEN_NO_AUTHORITY: 4054,
	REDIRECT_NOT_MATCHING: 4055,
	ROLE_CANNOT_EXECUTE_URI: 4056,
	MUST_AUTHORIZED_URI: 4057,
	REFRESH_NOT_EXIST_IN_COOKIE: 4058,
	MISMATCH_EMAIL_AND_PASSWORD: 4059,
};

export const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";
