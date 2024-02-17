import { Box, Text } from "@/components/common";

import { useEmailAuthSendMutation } from "@/hooks/api/useEmailAuthSendMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { commonButtonStyle } from "@/components/SignUp/SignUp.shared.style";

const EmailAuth = ({ email }: { email: string }) => {
	const { mutateEmailAuthSend } = useEmailAuthSendMutation();

	return (
		<Box tag="button" css={commonButtonStyle} onClick={() => mutateEmailAuthSend(email)}>
			<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>인증 코드 전송</Text>
		</Box>
	);
};

export default EmailAuth;
