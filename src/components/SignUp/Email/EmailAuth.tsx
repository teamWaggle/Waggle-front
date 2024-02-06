import { Flex, Text } from "@/components/common";
import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";
// import { useEmailAuthSendMutation } from "@/hooks/api/useEmailAuthSendMutation";

import { buttonStyle } from "@/components/SignUp/Email/SignUpEmail.style";

const EmailAuth = () => {
	// const { mutateEmailAuthSend } = useEmailAuthSendMutation();

	// const handleEmailSend = () => {
	// 	const email = "sling0623@gmail.com";

	// 	mutateEmailAuthSend(email);
	// };

	return (
		<Flex
			tag="button"
			styles={{ align: "center", justify: "center" }}
			css={buttonStyle}
			// onClick={handleEmailSend}
		>
			<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>이메일 인증</Text>
		</Flex>
	);
};

export default EmailAuth;
