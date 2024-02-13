export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const END_POINTS = {
	TOKEN: "/api/tokens/refresh",
	LOGIN: "/api/tokens",
	SIGN_UP: "/api/members",
	EMAIL_AUTH_SEND: "/api/members/email/send",
	CHECK_NICKNAME: (nickname: string) => `/api/members/check-nickname?nickname=${nickname}`,
	STORY: (boardId: number) => `/api/stories/${boardId}`,
	STORY_LIST: (currentPage: number) => `/api/stories?currentPage=${currentPage}`,
	COMMENT: (currentPage: number, boardId: number) =>
		`/api/comments/page?curretPage=${currentPage}&boardId=${boardId}`,
	SIREN: (boardId: number) => `/api/helps/${boardId}`,
	SIREN_LIST: (curretPage: number) => `/api/helps?currentPage=${curretPage}`,
};
