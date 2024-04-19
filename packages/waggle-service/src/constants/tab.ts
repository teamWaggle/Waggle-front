export const TAB_KEY = "tab";

export const SIGN_UP_TAB_KEY = {
  EMAIL: "email",
  PROFILE: "profile",
  PET: "pet",
};

export const signUpTabData = [
  {
    id: SIGN_UP_TAB_KEY.EMAIL,
    number: 1,
    text: "이메일 인증",
  },
  {
    id: SIGN_UP_TAB_KEY.PROFILE,
    number: 2,
    text: "프로필 입력",
  },
  {
    id: SIGN_UP_TAB_KEY.PET,
    number: 3,
    text: "반려견 등록",
  },
];

export const MY_PAGE_TAB_KEY = {
  PROFILE: "profile",
  LOG: "log",
  SIREN_POST: "siren-post",
  SIREN_COMMENT: "siren-comment",
  QUESTION_POST: "question-post",
  QUESTION_COMMENT: "question-comment",
};

export const MY_PAGE_TAB_DATA = [
  {
    title: "프로필",
    link: MY_PAGE_TAB_KEY.PROFILE,
  },
  {
    title: "Waggle Log",
    link: MY_PAGE_TAB_KEY.LOG,
  },
  {
    title: "SIREN",
    link: MY_PAGE_TAB_KEY.SIREN_POST,
    hasSub: true,
    subLink: MY_PAGE_TAB_KEY.SIREN_COMMENT,
    subData: [
      {
        title: "작성한 글",
        link: MY_PAGE_TAB_KEY.SIREN_POST,
      },
      {
        title: "댓글",
        link: MY_PAGE_TAB_KEY.SIREN_COMMENT,
      },
    ],
  },
  {
    title: "Q&A",
    link: MY_PAGE_TAB_KEY.QUESTION_POST,
    hasSub: true,
    subLink: MY_PAGE_TAB_KEY.QUESTION_COMMENT,
    subData: [
      {
        title: "작성한 글",
        link: MY_PAGE_TAB_KEY.QUESTION_POST,
      },
      {
        title: "댓글",
        link: MY_PAGE_TAB_KEY.QUESTION_COMMENT,
      },
    ],
  },
];
