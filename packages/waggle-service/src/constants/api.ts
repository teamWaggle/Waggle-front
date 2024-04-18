export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const GOOGLE_AUTH_API_URL = `${BASE_URL}${import.meta.env.VITE_GOOGLE_REDIRECT_URI}`;

export const KAKAO_AUTH_API_URL = `${BASE_URL}${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;

export const NAVER_AUTH_API_URL = `${BASE_URL}${import.meta.env.VITE_NAVER_REDIRECT_URI}`;

export const END_POINTS = {
  TOKEN: "/api/tokens/refresh",
  LOGIN: "/api/tokens",
  SIGN_UP: "/api/members",
  EMAIL_AUTH_SEND: "/api/members/email/send",
  EMAIL_AUTH_VERIFY: "/api/members/email/verify",
  PASSWORD_AUTH_VERIFY: "/api/members/email/verify/password",
  MEMBER_INFO_FIRST: "/api/members/info",
  GET_MEMBER_INFO: (userUrl?: string) => `/api/members/${userUrl}`,
  PASSWORD_RESET: (memberId?: number) => `/api/members/${memberId}/password`,
  PASSWORD_CHANGE: `/api/members/password`,
  FIND_EMAIL: (name: string, birthday: string) =>
    `/api/members/email/find?name=${name}&birthday=${birthday}`,
  CHECK_NICKNAME: (nickname: string) => `/api/members/check-nickname?nickname=${nickname}`,
  CHECK_USERURL: (userUrl: string) => `/api/members/check-user-url?userUrl=${userUrl}`,
  CHECK_EMAIL: (email: string) => `/api/members/check-email?email=${email}`,
  STORY: (storyId: number) => `/api/stories/${storyId}`,
  STORY_LIST: (currentPage: unknown) => `/api/stories?currentPage=${currentPage}`,
  POST_STORY: "/api/stories",
  COMMENTS: (currentPage: unknown, boardId: number) =>
    `/api/comments/page/${boardId}?currentPage=${currentPage}`,
  COMMENT: (commentId: number) => `/api/comments/${commentId}`,
  POST_COMMENT: (boardId?: number) => `/api/comments/${boardId}`,
  SIREN: (sirenId: number) => `/api/sirens/${sirenId}`,
  SIREN_LIST: (curretPage: number) => `/api/sirens?currentPage=${curretPage}`,
  SIREN_REPRESENTATIVE: "/api/sirens/representative",
  POST_SIREN: "/api/sirens",
  REPLIES: (currentPage: number, commentId: number) =>
    `/api/replies/${commentId}?currentPage=${currentPage}`,
  POST_REPLY: (commentId?: number) => `/api/replies/${commentId}`,
  REPLY: (replyId: number) => `/api/replies/${replyId}`,
  MEMBER_PET: (userUrl?: string) => `/api/pets/${userUrl}`,
  POST_PET: "/api/pets",
  PET: (petId: number) => `/api/pets/${petId}`,
  MEDIA: "/api/media/list",
  QUESTIONS: (currentPage: unknown) => `/api/questions?currentPage=${currentPage}`,
  QUESTION: (questionId: number) => `/api/questions/${questionId}`,
  QUESTION_REPRESENTATIVE: `/api/questions/representative`,
  POST_QUESTION: "/api/questions",
  MEMBER_STORY: (currentPage: unknown, userUrl?: string) =>
    `/api/stories/member/${userUrl}?currentPage=${currentPage}`,
  MEMBER_SIREN: (currentPage: unknown, userUrl?: string) =>
    `/api/sirens/member/${userUrl}?currentPage=${currentPage}`,
  MEMBER_QUESTION: (currentPage: unknown, userUrl?: string) =>
    `/api/questions/member/${userUrl}?currentPage=${currentPage}`,

  MEMBER_SCHEDULES: (memberId: number) => `/api/schedules/members/${memberId}`,
  MEMBER_SCHEDULES_MONTHLY: (memberId: number, year: number, month: number) =>
    `/api/schedules/members/${memberId}/monthly?year=${year}&month=${month}`,
  GET_TEAM_SCHEDULE_PAGE: (teamId: number, currentPage?: unknown) =>
    `/api/schedules/teams/${teamId}/page?currentPage=${currentPage}`,
  ADD_TEAM_SCHEDULE: (teamId: number) => `/api/schedules/${teamId}`,

  //Team
  MEMBER_TEAMS: (memberId: number) => `/api/teams/user/${memberId}/teams`,
  CREATE_TEAM: "/api/teams",
  TEAM_INFO: (teamId: number) => `/api/teams/${teamId}`,
  TEAM_PARTICIPATION_LIST: (teamId: number) => `/api/teams/${teamId}/participation`,
  RECOMMEND: (boardId: number) => `/api/recommends/${boardId}`,
  TEAM_PARTICIPATION_ACCEPT: (teamId: number, memberId: number, isAccept: boolean) =>
    `/api/teams/${teamId}/participation/${memberId}?accept=${isAccept}`,
  DELETE_TEAM_MEMBER: (teamId: number, memberId: number) =>
    `/api/teams/${teamId}/members/${memberId}`,
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
  TOKEN_ERROR_RANGE: 4000,
  INVALID_REFRESH_TOKEN: 4050,
  MISMATCH_REFRESH_TOKEN: 4051,
  INVALID_TOKEN: 4052,
  UNAUTHORIZED_MEMBER: 4053,
  TOKEN_HAS_EXPIRED: 4054,
  REDIRECT_NOT_MATCHING: 4055,
  ROLE_CANNOT_EXECUTE_URI: 4056,
  MUST_AUTHORIZED_URI: 4057,
  REFRESH_NOT_EXIST_IN_COOKIE: 4058,
  MISMATCH_EMAIL_AND_PASSWORD: 4059,
};

export const HTTP_ERROR_MESSAGE = {
  [HTTP_STATUS_CODE.NOT_FOUND]: {
    HEADING: "길을 잃었나요?",
    BODY: "요청하신 페이지를 찾을 수 없습니다.",
    BUTTON: "홈으로 가기",
  },
  [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
    HEADING: "데이터를 불러오는데 실패하였습니다.",
    BODY: `잠시 후 다시 시도해주세요.`,
    BUTTON: "새로고침",
  },
  [HTTP_STATUS_CODE.BAD_REQUEST]: {
    HEADING: "잘못된 요청입니다.",
    BODY: "확인 후 다시 시도해주세요.",
    BUTTON: "홈으로 가기",
  },
} as const;

export const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";
