import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";

import ProfileImg from "@/assets/png/profile.png";
import LogoutIcon from "@/assets/svg/ic-logout.svg?react";

import { Flex, Text } from "@/components/common";

import { useLogoutMutation } from "@/hooks/api/auth/useLogoutMutation";
import { useGetMemberInfoMutation } from "@/hooks/api/member/useGetMemberInfoMutation";

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
	const { mutate: mutateLogOut } = useLogoutMutation();
	const { mutate: getMemberInfoMutation } = useGetMemberInfoMutation();

	const [memberId] = useRecoilState(memberIdState);

	const [nickName, setNickName] = useState("");
	const [profileImgUrl, setProfileImgUrl] = useState("");

	useEffect(() => {
		getMemberInfoMutation(memberId, {
			onSuccess: ({ result }: MemberInfoResponseType) => {
				setNickName(result.nickname);
				setProfileImgUrl(result.profileImgUrl);
				console.log(result);
			},
		});
	}, []);

	return (
		<Flex css={layoutStyle}>
			<img src={profileImgUrl ? profileImgUrl : ProfileImg} alt="profileImg" />
			<Flex styles={{ direction: "column" }}>
				<Text css={nicknameStyle}>{nickName}</Text>
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
