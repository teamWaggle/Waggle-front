export const END_POINTS = {
	STORY: (boardId: number) => `/api/stories/${boardId}`,
	STORY_LIST: (currentPage: number) => `/api/stories?currentPage=${currentPage}`,
};
