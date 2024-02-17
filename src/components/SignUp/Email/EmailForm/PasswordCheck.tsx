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
	const [passwordCheckShow, setPasswordCheckShow] = useState(false);

	const handleShowPassword = () => {
		const passwordCheck = passwordCheckRef.current;

		if (passwordCheck === null) {
			return;
		}

		setPasswordCheckShow(!passwordCheckShow);

		if (!passwordCheckShow) {
			passwordCheck.type = "text";
		} else {
			passwordCheck.type = "password";
		}
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
					type="password"
					ref={passwordCheckRef}
					maxLength={20}
				/>

				<>
					{passwordCheckShow ? (
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
