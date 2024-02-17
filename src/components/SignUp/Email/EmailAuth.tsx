import { Flex, Text } from "@/components/common";

import { useEmailAuthSendMutation } from "@/hooks/api/useEmailAuthSendMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { buttonStyle } from "@/components/SignUp/Email/SignUpEmail.style";

const EmailAuth = ({ email }: { email: string }) => {
	const { mutateEmailAuthSend } = useEmailAuthSendMutation();

	return (
		<Flex
			tag="button"
			styles={{ align: "center", justify: "center" }}
			css={buttonStyle}
			onClick={() => mutateEmailAuthSend(email)}
		>
			<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>인증 코드 전송</Text>
		</Flex>
	);
};

export default EmailAuth;
