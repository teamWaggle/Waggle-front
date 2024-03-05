import { useLayoutEffect } from "react";

import { useRecoilState } from "recoil";

import LogoutIcon from "@/assets/svg/ic-logout.svg?react";
import ProfileImg from "@/assets/svg/profile-default.svg?react";

import { Flex, Text } from "@/components/common";

import { useGetMemberInfoMutation } from "@/hooks/api/useGetMemberInfoMutation";
import { useLogoutMutation } from "@/hooks/api/useLogoutMutation";

import { memberIdState } from "@/recoil/atoms/auth";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { MemberInfoResponseType } from "@/types/auth";

import {
	layoutStyle,
	nicknameStyle,
	buttonBoxStyle,
	buttonTextStyle,
} from "@/components/Landing/Sidebar/Profile/Profile.style";

const Profile = () => {
	const { mutateLogOut } = useLogoutMutation();
	const getMemberInfoMutation = useGetMemberInfoMutation();

	const [memberId] = useRecoilState(memberIdState);

	useLayoutEffect(() => {
		getMemberInfoMutation.mutate(memberId, {
			onSuccess: ({ result }: MemberInfoResponseType) => {
				console.log(result);
			},
		});
	}, [memberId]);

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
