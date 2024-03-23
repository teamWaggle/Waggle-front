import { useState } from "react";

import RequiredIcon from "@/assets/svg/RequiredIcon.svg?react";

import { Flex, Box, Text } from "@/components/common";

import { useCheckUserUrlMutation } from "@/hooks/api/auth/useCheckUserUrlMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	addressInputStyle,
	getNicknameTextStyle,
} from "@/components/SignUp/Profile/SignUpProfile.style";
import { commonButtonStyle, getFormTextStyle } from "@/components/SignUp/SignUp.shared.style";

const ProfileAddress = ({
	userUrl,
	changeUserUrl,
	userUrlRef,
	userUrlCheckComplete,
	changeUserUrlCheckComplete,
}: {
	userUrl: string;
	changeUserUrl: React.Dispatch<React.SetStateAction<string>>;
	userUrlRef: React.RefObject<HTMLInputElement>;
	userUrlCheckComplete: boolean;
	changeUserUrlCheckComplete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const checkUserUrlMutation = useCheckUserUrlMutation();

	const [isUserUrlCheck, setIsUserUrlCheck] = useState(false);

	const handleUserUrlCheck = () => {
		setIsUserUrlCheck(true);

		checkUserUrlMutation.mutate(userUrl, {
			onSuccess: () => {
				changeUserUrlCheckComplete(true);
			},
		});
	};

	return (
		<Flex styles={{ direction: "column", gap: "8px" }}>
			<Flex styles={{ gap: "4px", align: "center" }}>
				<Text css={getFormTextStyle(false)}>프로필 주소</Text>
				<RequiredIcon />
			</Flex>
			<Flex styles={{ align: "center", gap: "6px" }}>
				<Text css={getDefaultTextStyle(Theme.color.text, 500)}>https://www.waggle.com/users/@</Text>

				<input
					css={addressInputStyle}
					placeholder="가입 후 변경이 불가능해요"
					value={userUrl}
					onChange={(e) => changeUserUrl(e.target.value)}
					ref={userUrlRef}
				/>
			</Flex>

			<Flex styles={{ align: "center", gap: "16px" }}>
				<Box tag="button" css={commonButtonStyle} onClick={handleUserUrlCheck}>
					<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
						프로필 주소 중복 확인
					</Text>
				</Box>

				<Text css={getNicknameTextStyle(isUserUrlCheck && userUrlCheckComplete)}>
					{isUserUrlCheck &&
						(userUrlCheckComplete ? "사용할 수 있는 주소입니다." : "사용할 수 없는 주소입니다")}
				</Text>
			</Flex>
		</Flex>
	);
};

export default ProfileAddress;
