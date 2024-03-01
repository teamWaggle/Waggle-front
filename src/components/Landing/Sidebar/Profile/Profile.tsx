import LogoutIcon from "@/assets/svg/ic-logout.svg?react";
import ProfileImg from "@/assets/svg/profile-default.svg?react";

import { Flex, Text } from "@/components/common";

import { useLogoutMutation } from "@/hooks/api/useLogoutMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	nicknameStyle,
	buttonBoxStyle,
	buttonTextStyle,
} from "@/components/Landing/Sidebar/Profile/Profile.style";

const Profile = () => {
	const { mutateLogOut } = useLogoutMutation();

	return (
		<Flex css={layoutStyle}>
			<ProfileImg width={60} height={60} />
			<Flex styles={{ direction: "column" }}>
				<Text css={nicknameStyle}>김와글님adfsfasdfasfsaddfasdfas</Text>
				<Text size="xSmall" css={getDefaultTextStyle(Theme.color.text, 500)}>
					프로필 편집하기
				</Text>
			</Flex>

			<Flex tag="button" css={buttonBoxStyle} onClick={() => mutateLogOut()}>
				<Text css={buttonTextStyle}>로그아웃</Text>
				<LogoutIcon />
			</Flex>
		</Flex>
	);
};

export default Profile;
