import { Flex, Heading, Text, Logo } from "@/components/common";
import PasswordInput from "@/components/SignUp/SignUpEmail/PasswordInput/PasswordInput";
import PasswordValidator from "@/components/SignUp/SignUpEmail/PasswordInput/PasswordValidator";

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
					<Flex key={data.id} styles={{ direction: "column", gap: "8px" }}>
						<PasswordInput
							password={
								data.id === "password" ? passwordRequest.password : passwordRequest.passwordCheck
							}
							valueKey={data.id === "password" ? "password" : "passwordCheck"}
							updatePasswordInputValue={updatePasswordInputValue}
							passwordRef={data.id === "password" ? passwordRef : passwordCheckRef}
							title={data.text}
							isFind
						/>

						{data.id === "password" && (
							<PasswordValidator
								password={passwordRequest.password}
								validateComplete={handleChangeValidateComplete}
							/>
						)}
					</Flex>
				))}
			</Flex>

			<button type="submit" css={buttonStyle} onClick={handlePasswordChange}>
				비밀번호 변경하기
			</button>
		</Flex>
	);
};

export default PasswordEditModal;
