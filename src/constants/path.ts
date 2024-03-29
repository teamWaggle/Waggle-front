export const PATH = {
	ROOT: "/",
	SIREN: "/siren",
	SIREN_DETAIL: (sirenId: string) => `/siren/${sirenId}`,
	SIREN_EDIT: (sirenId: string) => `/siren/${sirenId}?mode=edit`,
} as const;
