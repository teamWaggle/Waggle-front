export const END_POINTS = {
	STORY: (boardId: number) => `/api/stories/${boardId}`,
	STORY_LIST: (currentPage: number) => `/api/stories?currentPage=${currentPage}`,
	COMMENT: (currentPage: number, boardId: number) =>
		`/api/comments/page?curretPage=${currentPage}&boardId=${boardId}`,
	SIREN_LIST: (curretPage: number) => `/api/helps?currentPage=${curretPage}`,
};
