import { useState, useRef } from "react";

import OptionIcon from "@/assets/svg/option.svg?react";

import { Flex, Heading, Text } from "@/components/common";
import PostProfile from "@/components/common/Post/PostProfile";

import useClickOutSide from "@/hooks/useClickOutSide";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { QuestionTitleType } from "@/types/question";

import { titleBoxStyle, tagStyle, keywordBoxStyle } from "@/components/common/Post/PostTitle.style";
import { menuStyle } from "@/components/Siren/Detail/Comment/Comment.style";
import { moreButtonStyle } from "@/components/Siren/Detail/Comment/Reply/Reply.style";

const QuestionTitle = ({
	status,
	title,
	hashtagList,
	member,
	viewCount,
	createdDate,
	handleEditQuestion,
	handleDeleteQuestion,
}: QuestionTitleType) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const menuRef = useRef<HTMLUListElement>(null);

	const memberId = Number(localStorage.getItem("MEMBER_ID"));

	useClickOutSide(menuRef, () => setMenuOpen(false));

	return (
		<Flex css={titleBoxStyle}>
			<Flex
				css={tagStyle(status === "RESOLVED" ? Theme.color.btn_success : Theme.color.btn_danger)}
			>
				<Text>{status === "RESOLVED" ? "해결" : "미해결"}</Text>
			</Flex>

			<Heading css={getDefaultTextStyle(Theme.color.brand_primary, 700)}>Q. {title}</Heading>

			<Flex css={keywordBoxStyle}>
				{hashtagList &&
					hashtagList.map((tag) => (
						<Text size="xLarge" key={tag}>
							#{tag}
						</Text>
					))}
			</Flex>

			<PostProfile member={member} viewCount={viewCount} createdDate={createdDate} />

			{member.memberId === memberId && (
				<Flex css={moreButtonStyle}>
					<OptionIcon onClick={() => setMenuOpen((prev) => !prev)} />

					{menuOpen && (
						<ul css={menuStyle} ref={menuRef}>
							<li onClick={handleEditQuestion}>수정하기</li>
							<li onClick={handleDeleteQuestion}>삭제하기</li>
						</ul>
					)}
				</Flex>
			)}
		</Flex>
	);
};

export default QuestionTitle;
