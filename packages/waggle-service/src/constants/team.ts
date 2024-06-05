import * as yup from "yup";

import { REGEX } from "@/constants/regex";

import type { TeamColorType } from "@/types/team";
import LockIcon from "@/assets/svg/smallLock.svg?react";
import EarthIcon from "@/assets/svg/earth.svg?react";
import type { TeamOptionType } from "@/components/common/Form/DropdownInputField/DropdownInputField";
export const TEAM_INFO = {
  MEMBERS_SLIDER_AMOUNT: 4,
  PARTICIPATION_SLIDER_AMOUNT: 3,
  TEAM_MAX_SIZE: 20,
};

export const TEAM_COLOR: TeamColorType[] = [
  "team_1",
  "team_2",
  "team_3",
  "team_4",
  "team_5",
  "team_6",
  "team_7",
  "team_8",
];

export const EDIT_TEAM_FORM_KEY = "updateTeamRequest";

export const CREATE_TEAM_FORM_KEY = "createTeamRequest";

export const TEAM_DEFAULT_VALUES = {
  name: "",
  description: "",
  coverImageUrl: "",
  teamColor: "team_1",
  isPrivate: false,
};

export const TEAM_ISPRIVATE = {
  name: "isPrivate",
};

export const TEAM_PRIVATE: TeamOptionType[] = [
  {
    name: "전체 공개",
    value: false,
    icon: EarthIcon(),
    description: "팀의 일정을 누구나 열람할 수 있습니다.",
  },
  {
    name: "팀원 공개",
    value: true,
    icon: LockIcon(),
    description: "팀원만 팀의 일정을 열람할 수 있습니다.",
  },
];

export const TEAM_TITLE = {
  MAX_LEGHTH: 30,
  VALIDATE_TEXT() {
    return `한영 ${this.MAX_LEGHTH}자 제한, 특수문자 불가`;
  },
  PLACEHOLDER: "팀 이름을 입력해주세요",
  NAME: "name",
  RULES() {
    return yup
      .string()
      .required("제목은 필수 입력 항목입니다.")
      .max(this.MAX_LEGHTH, `제목은 ${this.MAX_LEGHTH}자 이하여야 합니다.`)
      .matches(REGEX.EXCEPT_SPECIAL, "특수문자는 입력할 수 없습니다.");
  },
};

export const TEAM_CONTENT = {
  MAX_LEGHTH: 200,
  VALIDATE_TEXT() {
    return `한영 ${this.MAX_LEGHTH}자 제한, 특수문자 불가`;
  },
  PLACEHOLDER: "팀 소개를 입력해주세요",
  NAME: "description",
  RULES() {
    return yup
      .string()
      .required("소개는 필수 입력 항목입니다.")
      .max(this.MAX_LEGHTH, `소개는 ${this.MAX_LEGHTH}자 이하여야 합니다.`)
      .matches(REGEX.EXCEPT_SPECIAL, "특수문자는 입력할 수 없습니다.");
  },
};

export const TEAM_SCHEDULE_DEFAULT_VALUES = {
  title: "",
  content: "",
  startDate: new Date(),
  endDate: new Date(),
  startTime: new Date(new Date().setHours(0, 0, 0, 0)),
  endTime: new Date(new Date().setHours(0, 15, 0, 0)),
};

export const TEAM_SCHEDULE_SEARCH_VALUES = {
  startDate: "",
  endDate: "",
};
