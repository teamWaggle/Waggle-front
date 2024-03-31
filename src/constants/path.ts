export const PATH = {
	ROOT: "/",
	SIREN: "/siren",
	SIREN_DETAIL: (sirenId: string) => `/siren/${sirenId}`,
	SIREN_EDIT: (sirenId: string) => `/siren/${sirenId}?mode=edit`,
	QUESTION: "/question",
	QUESTION_DETAIL: (questionId: string) => `/question/${questionId}`,
	QUESTION_EDIT: (questionId: string) => `/question/${questionId}?mode=edit`,
} as const;
