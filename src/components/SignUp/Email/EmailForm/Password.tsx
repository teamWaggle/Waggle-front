import { useState } from "react";

import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";

import { Flex, Text } from "@/components/common";

import { passwordIconStyle } from "@/components/Landing/Sidebar/Login/LoginModal.style";
import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

const Password = ({
	password,
	changePassword,
	passwordRef,
}: {
	password: string;
	changePassword: React.Dispatch<React.SetStateAction<string>>;
	passwordRef: React.RefObject<HTMLInputElement>;
}) => {
	const [passwordShow, setPasswordShow] = useState(false);
	const [passwordType, setPasswordType] = useState("password");

	const handleShowPassword = () => {
		setPasswordType(passwordType === "password" ? "text" : "password");
		setPasswordShow(passwordType === "password" ? true : false);
	};

	return (
		<>
			<Text css={getFormTextStyle(true)}>비밀번호</Text>

			<Flex styles={{ align: "center", gap: "30px", position: "relative" }}>
				<input
					css={getInputStyle("412px")}
					placeholder="••••••••"
					value={password}
					onChange={(e) => changePassword(e.target.value)}
					type={passwordType}
					ref={passwordRef}
					maxLength={20}
				/>

				<>
					{passwordShow ? (
						<PasswordShowIcon css={passwordIconStyle} onClick={handleShowPassword} />
					) : (
						<PasswordNotShowIcon css={passwordIconStyle} onClick={handleShowPassword} />
					)}
				</>
			</Flex>
		</>
	);
};

export default Password;
