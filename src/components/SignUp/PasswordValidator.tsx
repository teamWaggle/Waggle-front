import PasswordCheckDisabledIcon from "@/assets/svg/ic-password-check-disabled.svg?react";
import PasswordCheckIcon from "@/assets/svg/ic-password-check.svg?react";
import { Flex, Text } from "@/components/common";
import { passwordCheckData } from "@/constants/auth";

import { getPasswordTextStyle } from "@/components/SignUp/SignUpEmail.style";

interface validatorType {
	password: string;
}

const PasswordValidator = ({ password }: validatorType) => {
	return (
		<Flex styles={{ padding: "0 8px", gap: "10px" }}>
			{passwordCheckData.map((data) => (
				<Flex styles={{ gap: "4px", align: "center" }} key={data.text}>
					{data.validator(password) ? <PasswordCheckIcon /> : <PasswordCheckDisabledIcon />}
					<Text size="small" css={getPasswordTextStyle(data.validator(password))}>
						{data.text}
					</Text>
				</Flex>
			))}
		</Flex>
	);
};

export default PasswordValidator;
