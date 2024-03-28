import { Flex, Heading, Text } from "@/components/common";
import PostProfile from "@/components/common/Post/PostProfile";
import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { QuestionTitleType } from "@/types/question";

import { titleBoxStyle, tagStyle, keywordBoxStyle } from "@/components/common/Post/PostTitle.style";

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
	const memberId = Number(localStorage.getItem("MEMBER_ID"));

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
				<ProfileOptionMenu
					handleEditMenu={handleEditQuestion}
					handleDeleteMenu={handleDeleteQuestion}
				/>
			)}
		</Flex>
	);
};

export default QuestionTitle;
