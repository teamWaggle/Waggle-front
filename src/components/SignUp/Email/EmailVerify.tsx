import { Box, Text } from "@/components/common";

import { useEmailAuthVerifyMutation } from "@/hooks/api/useEmailAuthVerifyMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { commonButtonStyle } from "@/components/SignUp/SignUp.shared.style";

interface EmailVerifyType {
	email: string;
	authCode: string;
	emailAuthComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailVerify = ({ email, authCode, emailAuthComplete }: EmailVerifyType) => {
	const emailAuthVerifyMutation = useEmailAuthVerifyMutation();

	const handleEmailAuthVerify = () => {
		emailAuthVerifyMutation.mutate(
			{ email, authCode },
			{
				onSuccess: () => emailAuthComplete(true),
			},
		);
	};

	return (
		<Box tag="button" css={commonButtonStyle} onClick={handleEmailAuthVerify}>
			<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>인증 하기</Text>
		</Box>
	);
};

export default EmailVerify;
