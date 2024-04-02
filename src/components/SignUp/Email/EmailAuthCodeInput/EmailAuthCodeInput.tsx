import { Flex, Box, Text } from "@/components/common";

import { useEmailAuthVerifyMutation } from "@/hooks/api/auth/useEmailAuthVerifyMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { EmailAuthVerifyType } from "@/types/auth";

import { commonButtonStyle } from "@/components/SignUp/SignUp.shared.style";
import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

interface EmailAuthCodeInputParams {
	email: string;
	emailAuthCode: string;
	updateInputValue: <Key extends keyof EmailAuthVerifyType>(
		key: Key,
		value: EmailAuthVerifyType[Key],
	) => void;
	handleChangeEmailAuthComplete: (complete: boolean) => void;
	emailAuthCodeRef: React.RefObject<HTMLInputElement>;
}

const EmailAuthCodeInput = ({
	email,
	emailAuthCode,
	updateInputValue,
	handleChangeEmailAuthComplete,
	emailAuthCodeRef,
}: EmailAuthCodeInputParams) => {
	const { mutate: emailAuthVerifyMutation } = useEmailAuthVerifyMutation();

	return (
		<Flex styles={{ direction: "column", gap: "8px" }}>
			<Text css={getFormTextStyle(true)}>이메일 인증번호</Text>
			<Flex styles={{ align: "center", gap: "12px", position: "relative" }}>
				<input
					css={getInputStyle("280px")}
					placeholder="인증번호 8자리 입력"
					value={emailAuthCode}
					onChange={(e) => updateInputValue("authCode", e.target.value)}
					ref={emailAuthCodeRef}
					maxLength={8}
				/>

				<Box
					tag="button"
					css={commonButtonStyle}
					onClick={() =>
						emailAuthVerifyMutation(
							{ email, authCode: emailAuthCode },
							{
								onSuccess: () => handleChangeEmailAuthComplete(true),
							},
						)
					}
				>
					<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>인증번호 인증</Text>
				</Box>
			</Flex>
		</Flex>
	);
};

export default EmailAuthCodeInput;
