import type { FieldValues, RegisterOptions } from "react-hook-form";

import { REGEX } from "@/constants/regex";

import type { TeamColorType } from "@/types/team";
interface InputType {
	MESSAGE: string;
	VALIDATION: Pick<
		RegisterOptions<FieldValues>,
		"maxLength" | "minLength" | "validate" | "required" | "pattern"
	>;
}

export const TEAM_INFO = {
	MEMBERS_SLIDER_AMOUNT: 4,
	PARTICIPATION_SLIDER_AMOUNT: 3,
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

export const TEAM_DEFAULT_VALUES = {
	title: "",
	content: "",
	image: null,
	teamColor: "team_1",
};

export const TEAM_TITLE: InputType = {
	MESSAGE: "한영 30자 제한, 특수문자 불가",
	VALIDATION: {
		required: {
			value: true,
			message: "팀 이름을 입력해주세요.",
		},
		maxLength: {
			value: 30,
			message: "30자 이내로 입력해주세요.",
		},
		pattern: {
			value: REGEX.EXCEPT_SPECIAL,
			message: "특수문자는 사용할 수 없습니다.",
		},
	},
};

export const TEAM_CONTENT: InputType = {
	MESSAGE: "한영 30자 제한, 특수문자 불가",
	VALIDATION: {
		required: {
			value: true,
			message: "팀 소개를 입력해주세요.",
		},
		maxLength: {
			value: 30,
			message: "30자 이내로 입력해주세요.",
		},
		pattern: {
			value: REGEX.EXCEPT_SPECIAL,
			message: "특수문자는 사용할 수 없습니다.",
		},
	},
};
