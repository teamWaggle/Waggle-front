import * as yup from "yup";

import { REGEX } from "@/constants/regex";

export const ROOM_FORM_DEFAULT_VALUE = {
  title: "",
  description: "",
  password: "",
};

export const ROOM_TITLE_FORM = {
  TITLE: "채팅방 이름",
  PLACEHOLDER: "채팅방 이름을 입력해주세요.",
  NAME: "title",
  RULES() {
    return yup
      .string()
      .required("채팅방 이름을 입력해주세요.")
      .max(15, `채팅방 제목은 15자 이하여야 합니다`);
  },
};

export const ROOM_DESCRIPTION_FORM = {
  TITLE: "채팅방 소개",
  PLACEHOLDER: "채팅방 소개를 입력해주세요.",
  NAME: "description",
  RULES() {
    return yup.string().required("채팅방 소개를 입력해주세요.");
  },
};

export const ROOM_PASSWORD_FORM = {
  TITLE: "비밀번호",
  PLACEHOLDER: "숫자 6자리를 입력해주세요",
  NAME: "password",
  MAX_LENGTH: 6,
  RULES() {
    return yup
      .string()
      .max(this.MAX_LENGTH, `비밀번호는 ${this.MAX_LENGTH}자 이하여야 합니다`)
      .matches(REGEX.ONLY_NUM, "숫자만 입력 가능합니다");
    // .matches(REGEX.ENG_EXCEPT_REG, "영어는 입력할 수 없습니다.");
  },
};

export const ROOM_FORM_SCHEMA = yup
  .object({
    title: ROOM_TITLE_FORM.RULES(),
    description: ROOM_DESCRIPTION_FORM.RULES(),
    password: ROOM_PASSWORD_FORM.RULES(),
  })
  .required();

export const ROOM_JOIN_FORM_SCHEMA = yup
  .object({ password: ROOM_PASSWORD_FORM.RULES() })
  .required();
