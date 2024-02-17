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

export const emailFormData = [
	{
		id: "email",
		text: "이메일",
		width: "280px",
		placeholder: "Waggle@email.com",
		type: "text",
	},
	{
		id: "emailAuthCode",
		text: "이메일 인증번호",
		width: "280px",
		placeholder: "인증번호 8자리 입력",
		type: "text",
		maxLength: 8,
	},
	{
		id: "password",
		text: "비밀번호",
		width: "412px",
		placeholder: "••••••••",
		type: "password",
		maxLength: 20,
	},
	{
		id: "passwordCheck",
		text: "비밀번호 확인",
		width: "412px",
		placeholder: "••••••••",
		type: "password",
		maxLength: 20,
	},
];
