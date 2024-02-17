import { useState } from "react";

import { Flex, Heading, Text, Logo } from "@/components/common";
import ChangePassword from "@/components/Landing/Sidebar/Login/ChangePassword";

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
	const [mode] = useState("complete");

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
					<input css={inputStyle} placeholder="waggle@gmail.com" />

					<button type="submit" css={buttonStyle}>
						인증코드 전송하기
					</button>
				</>
			)}

			{mode === "authCode" && (
				<>
					<input css={inputStyle} placeholder="영어 대소문자, 숫자 포함 8자리" />

					<button type="submit" css={buttonStyle}>
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
