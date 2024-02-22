import { Flex, Box, Text } from "@/components/common";

import { useEmailAuthVerifyMutation } from "@/hooks/api/useEmailAuthVerifyMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { commonButtonStyle } from "@/components/SignUp/SignUp.shared.style";
import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

const EmailAuthCode = ({
	email,
	emailAuthCode,
	changeEmailAuthCode,
	emailAuthComplete,
	emailAuthCodeRef,
}: {
	email: string;
	emailAuthCode: string;
	changeEmailAuthCode: React.Dispatch<React.SetStateAction<string>>;
	emailAuthComplete: React.Dispatch<React.SetStateAction<boolean>>;
	emailAuthCodeRef: React.RefObject<HTMLInputElement>;
}) => {
	const emailAuthVerifyMutation = useEmailAuthVerifyMutation();

	const handleEmailAuthVerify = () => {
		emailAuthVerifyMutation.mutate(
			{ email, authCode: emailAuthCode },
			{
				onSuccess: () => emailAuthComplete(true),
			},
		);
	};

	return (
		<Flex styles={{ direction: "column", gap: "8px" }}>
			<Text css={getFormTextStyle(true)}>이메일 인증번호</Text>
			<Flex styles={{ align: "center", gap: "12px", position: "relative" }}>
				<input
					css={getInputStyle("280px")}
					placeholder="인증번호 8자리 입력"
					value={emailAuthCode}
					onChange={(e) => changeEmailAuthCode(e.target.value)}
					ref={emailAuthCodeRef}
					maxLength={8}
				/>

				<Box tag="button" css={commonButtonStyle} onClick={handleEmailAuthVerify}>
					<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>인증번호 인증</Text>
				</Box>
			</Flex>
		</Flex>
	);
};

export default EmailAuthCode;
