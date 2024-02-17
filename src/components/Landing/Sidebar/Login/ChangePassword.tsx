import { useState, useRef } from "react";

import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";

import { Flex, Text } from "@/components/common";

import { findPasswordFormData } from "@/constants/auth";

import { inputStyle, formTextStyle, passwordIconStyle } from "./FindEmailModal.style";

interface formValueType {
	[key: string]: string;
}

interface findPasswordFormDataType {
	id: string;
	text: string;
}

const ChangePassword = () => {
	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordCheckRef = useRef<HTMLInputElement>(null);

	const [formValue, setFormValue] = useState<formValueType>({
		password: "",
		passwordCheck: "",
	});

	const [passwordShow, setPasswordShow] = useState(false);
	const [passwordCheckShow, setPasswordCheckShow] = useState(false);

	// const { password, passwordCheck } = formValue;

	const handleFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const changed = {
			...formValue,
			[e.target.name]: e.target.value,
		};
		setFormValue(changed);
	};

	const handleShowPassword = (isCheck: boolean) => {
		const password = passwordRef.current;
		const passwordCheck = passwordCheckRef.current;

		if (password === null || passwordCheck === null) {
			return;
		}

		if (isCheck) {
			setPasswordCheckShow(!passwordCheckShow);

			if (!passwordCheckShow) {
				passwordCheck.type = "text";
			} else {
				passwordCheck.type = "password";
			}
		} else {
			setPasswordShow(!passwordShow);

			if (!passwordShow) {
				password.type = "text";
			} else {
				password.type = "password";
			}
		}
	};

	return (
		<Flex styles={{ direction: "column", gap: "30px" }}>
			{findPasswordFormData.map(({ id, text }: findPasswordFormDataType) => (
				<Flex styles={{ direction: "column", gap: "8px", position: "relative" }} key={id}>
					<Text css={formTextStyle}>{text}</Text>
					<input
						css={inputStyle}
						placeholder="••••••••"
						value={formValue[id]}
						onChange={handleFormValue}
						type="password"
						ref={id === "password" ? passwordRef : passwordCheckRef}
						maxLength={20}
					/>

					{id === "password" && (
						<>
							{passwordShow ? (
								<PasswordShowIcon
									css={passwordIconStyle}
									onClick={() => handleShowPassword(false)}
								/>
							) : (
								<PasswordNotShowIcon
									css={passwordIconStyle}
									onClick={() => handleShowPassword(false)}
								/>
							)}
						</>
					)}

					{id === "passwordCheck" && (
						<>
							{passwordCheckShow ? (
								<PasswordShowIcon
									css={passwordIconStyle}
									onClick={() => handleShowPassword(true)}
								/>
							) : (
								<PasswordNotShowIcon
									css={passwordIconStyle}
									onClick={() => handleShowPassword(true)}
								/>
							)}
						</>
					)}
				</Flex>
			))}
		</Flex>
	);
};

export default ChangePassword;
