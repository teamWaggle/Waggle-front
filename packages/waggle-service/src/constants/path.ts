export const PATH = {
  ROOT: "/",
  SIREN: "/siren",
  SIREN_DETAIL: (sirenId: string) => `/siren/${sirenId}`,
  SIREN_EDIT: (sirenId: string) => `/siren/${sirenId}?mode=edit`,
  SIREN_CREATE: "/siren-new",
  QUESTION: "/question",
  QUESTION_DETAIL: (questionId: string) => `/question/${questionId}`,
  QUESTION_EDIT: (questionId: string) => `/question/${questionId}?mode=edit`,
  QUESTION_CREATE: "/question-new",
  MY: (userUrl: string) => `/${userUrl}`,
} as const;
