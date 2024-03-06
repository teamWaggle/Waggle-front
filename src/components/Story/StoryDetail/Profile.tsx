import { useState } from "react";

import MoreButtonIcon from "@/assets/svg/ic-more-button.svg?react";

import { Flex, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	profileStyle,
	moreButtonStyle,
	menuStyle,
} from "@/components/Story/StoryDetail/Profile.style";

interface ProfileType {
	img: string | undefined;
	nickname: string | undefined;
	editClick?: () => void;
	deleteClick?: () => void;
}

const Profile = ({ img, nickname, editClick, deleteClick }: ProfileType) => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
			<Flex styles={{ align: "center", gap: "10px" }}>
				<img src={img} alt="profileImg" css={profileStyle} />
				<Text size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
					{nickname}
				</Text>
			</Flex>
			<Flex
				styles={{ justify: "flex-end" }}
				css={moreButtonStyle}
				onClick={() => setMenuOpen((prev) => !prev)}
			>
				<MoreButtonIcon />
				{menuOpen && (
					<ul css={menuStyle}>
						<li onClick={editClick}>수정하기</li>
						<li onClick={deleteClick}>삭제하기</li>
					</ul>
				)}
			</Flex>
		</Flex>
	);
};

export default Profile;
