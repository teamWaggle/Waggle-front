import { useState } from "react";

import { Flex, Heading, Text, Logo } from "@/components/common";
import ChangePassword from "@/components/Landing/Sidebar/Login/ChangePassword";

import { useEmailAuthSendMutation } from "@/hooks/api/useEmailAuthSendMutation";
import { usePasswordAuthVerifyMutation } from "@/hooks/api/usePasswordAuthVerifyMutation";

import type { CommonResponseType } from "@/types/common";
import type { modalCloseType } from "@/types/modal";

import {
	layoutStyle,
	headingStyle,
	textStyle,
	inputStyle,
	buttonStyle,
} from "./FindEmailModal.style";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FindPasswordModal = ({ modalClose }: modalCloseType) => {
	const { mutateEmailAuthSend } = useEmailAuthSendMutation();
	const passwordAuthVerifyMutation = usePasswordAuthVerifyMutation();

	const [mode, setMode] = useState("changePassword");
	const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");

	const [passwordAuthCode, setPasswordAuthCode] = useState("");
	const [, setMemberId] = useState(0);

	const handleEmailSendClick = () => {
		mutateEmailAuthSend(email, {
			onSuccess: () => {
				setMode("authCode");
			},
		});
	};

	const handlePasswordAuthVerify = () => {
		passwordAuthVerifyMutation.mutate(
			{ email, authCode: passwordAuthCode },
			{
				onSuccess: ({ result }: CommonResponseType) => {
					setMode("changePassword");
					setMemberId(result);
				},
			},
		);
	};

	return (
		<Flex styles={{ direction: "column", align: "center", gap: "60px" }} css={layoutStyle}>
			{mode === "complete" ? (
				<Flex styles={{ direction: "column", align: "center", gap: "76px" }}>
					<Logo width={138} height={30} />
					<Heading size="xSmall" css={headingStyle}>
						비밀번호 변경이 완료되었습니다
					</Heading>
					<button type="button" css={buttonStyle}>
						로그인 하기
					</button>
				</Flex>
			) : (
				<Flex styles={{ direction: "column", align: "center", gap: "14px" }}>
					<Logo width={138} height={30} />
					<Heading size="xSmall" css={headingStyle}>
						비밀번호 찾기
					</Heading>
					<Text css={textStyle}>
						{mode === "sendCode" &&
							"아이디(이메일)를 입력해주세요.\n이메일을 통해 비밀번호 변경 인증코드가 전송됩니다."}

						{mode === "authCode" && "전송된 인증 코드를 입력해주세요"}

						{mode === "changePassword" && "변경하실 비밀번호를 입력해주세요"}
					</Text>
				</Flex>
			)}

			{mode === "sendCode" && (
				<>
					<input
						css={inputStyle}
						placeholder="waggle@gmail.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<button type="submit" css={buttonStyle} onClick={handleEmailSendClick}>
						인증코드 전송하기
					</button>
				</>
			)}

			{mode === "authCode" && (
				<>
					<input
						css={inputStyle}
						placeholder="영어 대소문자, 숫자 포함 8자리"
						value={passwordAuthCode}
						onChange={(e) => setPasswordAuthCode(e.target.value)}
						maxLength={8}
					/>

					<button type="submit" css={buttonStyle} onClick={handlePasswordAuthVerify}>
						인증하기
					</button>
				</>
			)}

			{mode === "changePassword" && (
				<>
					<ChangePassword />

					<button type="submit" css={buttonStyle}>
						비밀번호 변경하기
					</button>
				</>
			)}
		</Flex>
	);
};

export default FindPasswordModal;
