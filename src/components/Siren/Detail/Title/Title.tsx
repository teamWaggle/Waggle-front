import { useState, useRef } from "react";

import OptionIcon from "@/assets/svg/option.svg?react";

import { Flex, Heading, Text } from "@/components/common";

import useClickOutSide from "@/hooks/useClickOutSide";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagStyle, generateTagName } from "@/utils/generateTag";

import type { SirenTitleType } from "@/types/siren";

import { menuStyle } from "@/components/Siren/Detail/Comment/Comment.style";
import { moreButtonStyle } from "@/components/Siren/Detail/Comment/Reply/Reply.style";
import { titleBoxStyle, tagStyle, profileStyle } from "@/components/Siren/Detail/Title/Title.style";

const Title = ({
	category,
	title,
	member,
	lostDate,
	viewCount,
	handleEditSiren,
	handleDeleteSiren,
}: SirenTitleType) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const menuRef = useRef<HTMLUListElement>(null);

	const memberId = Number(localStorage.getItem("MEMBER_ID"));

	useClickOutSide(menuRef, () => setMenuOpen(false));

	return (
		<Flex css={titleBoxStyle}>
			<Flex css={tagStyle(generateTagStyle(category))}>
				<Text>{generateTagName(category)}</Text>
			</Flex>

			<Heading css={getDefaultTextStyle(Theme.color.text, 700)}>{title}</Heading>

			<Flex css={profileStyle}>
				<img src={member.profileImgUrl} alt="profileImg" />
				<Text>
					<span>{member.nickname}</span>
					<span>조회 {viewCount}</span>
					<span>{lostDate}</span>
				</Text>
			</Flex>

			{member.memberId === memberId && (
				<Flex css={moreButtonStyle}>
					<OptionIcon onClick={() => setMenuOpen((prev) => !prev)} />

					{menuOpen && (
						<ul css={menuStyle} ref={menuRef}>
							<li onClick={handleEditSiren}>수정하기</li>
							<li onClick={handleDeleteSiren}>삭제하기</li>
						</ul>
					)}
				</Flex>
			)}
		</Flex>
	);
};

export default Title;
