export const END_POINTS = {
	LOGIN: "/api/tokens",
	SIGN_UP: "/api/members",
	EMAIL_AUTH_SEND: "/api/members/email/send",
	STORY: (boardId: number) => `/api/stories/${boardId}`,
	STORY_LIST: (currentPage: number) => `/api/stories?currentPage=${currentPage}`,
	COMMENT: (currentPage: number, boardId: number) =>
		`/api/comments/page?curretPage=${currentPage}&boardId=${boardId}`,
	SIREN: (boardId: number) => `/api/helps/${boardId}`,
	SIREN_LIST: (curretPage: number) => `/api/helps?currentPage=${curretPage}`,
};
