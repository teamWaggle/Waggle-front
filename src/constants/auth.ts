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
	},
	{
		id: "emailAuthNumber",
		text: "이메일 인증번호",
		width: "412px",
		placeholder: "이메일로 인증받은 번호 4자리를 입력해주세요",
	},
	{
		id: "password",
		text: "비밀번호",
		width: "412px",
		placeholder: "••••••••",
	},
	{
		id: "passwordCheck",
		text: "비밀번호 확인",
		width: "412px",
		placeholder: "••••••••",
	},
];
