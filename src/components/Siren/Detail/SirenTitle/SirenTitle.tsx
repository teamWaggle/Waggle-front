import { useState, useRef } from "react";

import OptionIcon from "@/assets/svg/option.svg?react";

import { Flex, Heading, Text } from "@/components/common";
import PostProfile from "@/components/common/Post/PostProfile";

import useClickOutSide from "@/hooks/useClickOutSide";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagStyle, generateTagName } from "@/utils/generateTag";

import type { SirenTitleType } from "@/types/siren";

import { titleBoxStyle, tagStyle } from "@/components/common/Post/PostTitle.style";
import { menuStyle } from "@/components/Siren/Detail/Comment/Comment.style";
import { moreButtonStyle } from "@/components/Siren/Detail/Comment/Reply/Reply.style";

const SirenTitle = ({
	category,
	title,
	member,
	createdDate,
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

			<PostProfile member={member} viewCount={viewCount} createdDate={createdDate} />

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

export default SirenTitle;
