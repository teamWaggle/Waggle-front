import {
	hasEngInPassword,
	hasNumInPassword,
	hasSpecialCharInPassword,
	checkLengthInPassword,
} from "@/utils/validator";

export const passwordCheckData = [
	{
		validator: hasEngInPassword,
		text: "영문",
	},
	{
		validator: hasNumInPassword,
		text: "숫자",
	},
	{
		validator: hasSpecialCharInPassword,
		text: "특수문자",
	},
	{
		validator: checkLengthInPassword,
		text: "8자리 이상",
	},
];
