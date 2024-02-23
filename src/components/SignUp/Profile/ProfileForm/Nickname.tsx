import { useState } from "react";

import RequiredIcon from "@/assets/svg/RequiredIcon.svg?react";

import { Flex, Box, Text } from "@/components/common";

import { useCheckNicknameMutation } from "@/hooks/api/useCheckNicknameMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { getNicknameTextStyle } from "@/components/SignUp/Profile/SignUpProfile.style";
import {
	commonButtonStyle,
	getFormTextStyle,
	getInputStyle,
} from "@/components/SignUp/SignUp.shared.style";

const Nickname = ({
	nickname,
	changeNickname,
	nicknameRef,
	nicknameCheckComplete,
	changeNicknameCheckComplete,
}: {
	nickname: string;
	changeNickname: React.Dispatch<React.SetStateAction<string>>;
	nicknameRef: React.RefObject<HTMLInputElement>;
	nicknameCheckComplete: boolean;
	changeNicknameCheckComplete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const checkNicknameMutation = useCheckNicknameMutation();

	const [isNicknameCheck, setIsNicknameCheck] = useState(false);

	const handleNicknameCheck = () => {
		setIsNicknameCheck(true);

		checkNicknameMutation.mutate(nickname, {
			onSuccess: () => {
				changeNicknameCheckComplete(true);
			},
		});
	};

	return (
		<Flex styles={{ direction: "column", gap: "8px" }}>
			<Flex styles={{ gap: "4px", align: "center" }}>
				<Text css={getFormTextStyle(true)}>닉네임</Text>
				<RequiredIcon />
			</Flex>
			<input
				css={getInputStyle("444px")}
				placeholder="닉네임을 입력해주세요! 언제든지 변경 가능해요"
				value={nickname}
				onChange={(e) => changeNickname(e.target.value)}
				ref={nicknameRef}
			/>
			<Flex styles={{ gap: "16px", align: "center" }}>
				<Box tag="button" css={commonButtonStyle} onClick={handleNicknameCheck}>
					<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>닉네임 중복 확인</Text>
				</Box>

				<Text css={getNicknameTextStyle(isNicknameCheck && nicknameCheckComplete)}>
					{isNicknameCheck &&
						(nicknameCheckComplete
							? "사용할 수 있는 닉네임입니다"
							: "사용할 수 없는 닉네임입니다.")}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Nickname;
