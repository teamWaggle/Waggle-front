import MoreButtonIcon from "@/assets/svg/ic-more-button.svg?react";

import { Flex, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { profileStyle, moreButtonStyle } from "@/components/Landing/Post/Detail/Detail.style";

interface ProfileType {
	img: string;
	username: string | undefined;
}

const Profile = ({ img, username }: ProfileType) => {
	return (
		<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
			<Flex styles={{ align: "center", gap: "10px" }}>
				<img src={img} alt="profileImg" css={profileStyle} />
				<Text size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
					{username}
				</Text>
			</Flex>
			<Flex styles={{ justify: "flex-end" }} css={moreButtonStyle}>
				<MoreButtonIcon />
			</Flex>
		</Flex>
	);
};

export default Profile;
