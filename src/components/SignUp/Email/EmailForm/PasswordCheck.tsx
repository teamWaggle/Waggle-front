import { useState } from "react";

import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";

import { Flex, Text } from "@/components/common";

import { passwordIconStyle } from "@/components/Landing/Sidebar/Login/LoginModal.style";
import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

const PasswordCheck = ({
	passwordCheck,
	changePasswordCheck,
	passwordCheckRef,
}: {
	passwordCheck: string;
	changePasswordCheck: React.Dispatch<React.SetStateAction<string>>;
	passwordCheckRef: React.RefObject<HTMLInputElement>;
}) => {
	const [passwordShow, setPasswordShow] = useState(false);
	const [passwordType, setPasswordType] = useState("password");

	const handleShowPassword = () => {
		setPasswordType(passwordType === "password" ? "text" : "password");
		setPasswordShow(passwordType === "password" ? true : false);
	};

	return (
		<Flex styles={{ direction: "column", gap: "8px" }}>
			<Text css={getFormTextStyle(true)}>비밀번호 확인</Text>
			<Flex styles={{ align: "center", gap: "30px", position: "relative" }}>
				<input
					css={getInputStyle("412px")}
					placeholder="••••••••"
					value={passwordCheck}
					onChange={(e) => changePasswordCheck(e.target.value)}
					type={passwordType}
					ref={passwordCheckRef}
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
		</Flex>
	);
};

export default PasswordCheck;
