import { Flex, Heading, Text, Logo } from "@/components/common";
import Password from "@/components/common/Password/Password";

import { passwordFormData } from "@/constants/auth";

import { usePasswordForm } from "@/hooks/auth/usePasswordForm";

import type { MemberIdType } from "@/types/common";

import {
	layoutStyle,
	headingStyle,
	textStyle,
	buttonStyle,
} from "@/components/Login/FindEmailModal/FindEmailModal.style";

const PasswordEditModal = ({ memberId }: MemberIdType) => {
	const {
		passwordRef,
		passwordCheckRef,
		passwordRequest,
		updateInputValue: updatePasswordInputValue,
		handleChangeValidateComplete,
		handlePasswordChange,
	} = usePasswordForm({ memberId });

	return (
		<Flex css={layoutStyle}>
			<Flex styles={{ direction: "column", align: "center", gap: "14px" }}>
				<Logo width={138} height={30} />
				<Heading size="xSmall" css={headingStyle}>
					비밀번호 변경
				</Heading>
				<Text css={textStyle}>변경하실 비밀번호를 입력해주세요</Text>
			</Flex>

			<Flex styles={{ direction: "column", gap: "20px" }}>
				{passwordFormData.map((data) => (
					<Password
						data={data}
						passwordRequest={passwordRequest}
						updatePasswordInputValue={updatePasswordInputValue}
						passwordRef={passwordRef}
						passwordCheckRef={passwordCheckRef}
						handleChangeValidateComplete={handleChangeValidateComplete}
						isFind
					/>
				))}
			</Flex>

			<button type="submit" css={buttonStyle} onClick={handlePasswordChange}>
				비밀번호 변경하기
			</button>
		</Flex>
	);
};

export default PasswordEditModal;
