import { Flex, Box, Text } from "@/components/common";

import { useEmailAuthSendMutation } from "@/hooks/api/auth/useEmailAuthSendMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { EmailAuthVerifyType } from "@/types/auth";

import { commonButtonStyle } from "@/components/SignUp/SignUp.shared.style";
import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

interface EmailInputParams {
	email: string;
	updateInputValue: <Key extends keyof EmailAuthVerifyType>(
		key: Key,
		value: EmailAuthVerifyType[Key],
	) => void;
	emailRef: React.RefObject<HTMLInputElement>;
}

const EmailInput = ({ email, updateInputValue, emailRef }: EmailInputParams) => {
	const { mutate: mutateEmailAuthSend } = useEmailAuthSendMutation();

	return (
		<Flex styles={{ direction: "column", gap: "8px" }}>
			<Text css={getFormTextStyle(true)}>이메일</Text>

			<Flex styles={{ align: "center", gap: "12px", position: "relative" }}>
				<input
					css={getInputStyle("280px")}
					placeholder="Waggle@email.com"
					value={email}
					onChange={(e) => updateInputValue("email", e.target.value)}
					ref={emailRef}
				/>

				<Box tag="button" css={commonButtonStyle} onClick={() => mutateEmailAuthSend(email)}>
					<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>인증 코드 전송</Text>
				</Box>
			</Flex>
		</Flex>
	);
};

export default EmailInput;
