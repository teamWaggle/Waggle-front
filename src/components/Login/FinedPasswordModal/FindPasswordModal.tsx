import { Flex, Heading, Text, Logo } from "@/components/common";
import LoginModal from "@/components/Login/LoginModal/LoginModal";
import PasswordInput from "@/components/SignUp/Email/PasswordInput/PasswordInput";
import PasswordValidator from "@/components/SignUp/Email/PasswordInput/PasswordValidator";

import { findPasswordFormData } from "@/constants/auth";

import { useFindPasswordForm } from "@/hooks/auth/useFindPasswordForm";
import { usePasswordForm } from "@/hooks/auth/usePasswordForm";
import useModal from "@/hooks/useModal";

import {
	layoutStyle,
	headingStyle,
	textStyle,
	inputStyle,
	buttonStyle,
} from "@/components/Login/FindEmailModal/FindEmailModal.style";

const FindPasswordModal = () => {
	const {
		memberId,
		mode,
		emailRef,
		emailAuthRef,
		findPasswordRequest,
		updateInputValue,
		handleEmailSend,
		handleEmailAuth,
		handleChangeMode,
	} = useFindPasswordForm();

	const {
		passwordRef,
		passwordCheckRef,
		passwordRequest,
		updateInputValue: updatePasswordInputValue,
		handleChangeValidateComplete,
		handlePasswordChange,
	} = usePasswordForm({ memberId, handleChangeMode });

	const modal = useModal();

	const handleLoginClick = () => {
		modal.closeModal();

		modal.openModal({
			key: `LoginModal`,
			component: () => <LoginModal />,
		});
	};

	return (
		<Flex styles={{ direction: "column", align: "center", gap: "60px" }} css={layoutStyle}>
			{mode === "complete" ? (
				<Flex styles={{ direction: "column", align: "center", gap: "76px" }}>
					<Logo width={138} height={30} />
					<Heading size="xSmall" css={headingStyle}>
						비밀번호 변경이 완료되었습니다
					</Heading>
					<button type="button" css={buttonStyle} onClick={handleLoginClick}>
						로그인 하기
					</button>
				</Flex>
			) : (
				<Flex styles={{ direction: "column", align: "center", gap: "14px" }}>
					<Logo width={138} height={30} />
					<Heading size="xSmall" css={headingStyle}>
						비밀번호 찾기
					</Heading>
					<Text css={textStyle}>
						{mode === "sendCode" &&
							"아이디(이메일)를 입력해주세요.\n이메일을 통해 비밀번호 변경 인증코드가 전송됩니다."}

						{mode === "authCode" && "전송된 인증 코드를 입력해주세요"}

						{mode === "changePassword" && "변경하실 비밀번호를 입력해주세요"}
					</Text>
				</Flex>
			)}

			{mode === "sendCode" && (
				<>
					<input
						css={inputStyle}
						placeholder="waggle@gmail.com"
						value={findPasswordRequest.email}
						onChange={(e) => updateInputValue("email", e.target.value)}
						ref={emailRef}
					/>

					<button type="submit" css={buttonStyle} onClick={handleEmailSend}>
						인증코드 전송하기
					</button>
				</>
			)}

			{mode === "authCode" && (
				<>
					<input
						css={inputStyle}
						placeholder="영어 대소문자, 숫자 포함 8자리"
						value={findPasswordRequest.authCode}
						onChange={(e) => updateInputValue("authCode", e.target.value)}
						maxLength={8}
						ref={emailAuthRef}
					/>

					<button type="submit" css={buttonStyle} onClick={handleEmailAuth}>
						인증하기
					</button>
				</>
			)}

			{mode === "changePassword" && (
				<>
					<Flex styles={{ direction: "column", gap: "20px" }}>
						{findPasswordFormData.map((data) => (
							<Flex key={data.id} styles={{ direction: "column", gap: "8px" }}>
								<PasswordInput
									password={
										data.id === "password"
											? passwordRequest.password
											: passwordRequest.passwordCheck
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
				</>
			)}
		</Flex>
	);
};

export default FindPasswordModal;
