import { Flex, Text } from "@/components/common";

import { useEmailAuthVerifyMutation } from "@/hooks/api/useEmailAuthVerifyMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { buttonStyle } from "@/components/SignUp/Email/SignUpEmail.style";

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
		<Flex
			tag="button"
			styles={{ align: "center", justify: "center" }}
			css={buttonStyle}
			onClick={handleEmailAuthVerify}
		>
			<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>인증 하기</Text>
		</Flex>
	);
};

export default EmailVerify;
