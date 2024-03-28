import { Flex, Heading, Text } from "@/components/common";
import PostProfile from "@/components/common/Post/PostProfile";
import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagStyle, generateTagName } from "@/utils/generateTag";

import type { SirenTitleType } from "@/types/siren";

import { titleBoxStyle, tagStyle } from "@/components/common/Post/PostTitle.style";

const SirenTitle = ({
	category,
	title,
	member,
	createdDate,
	viewCount,
	handleEditSiren,
	handleDeleteSiren,
}: SirenTitleType) => {
	const memberId = Number(localStorage.getItem("MEMBER_ID"));

	return (
		<Flex css={titleBoxStyle}>
			<Flex css={tagStyle(generateTagStyle(category))}>
				<Text>{generateTagName(category)}</Text>
			</Flex>

			<Heading css={getDefaultTextStyle(Theme.color.text, 700)}>{title}</Heading>

			<PostProfile member={member} viewCount={viewCount} createdDate={createdDate} />

			{member.memberId === memberId && (
				<ProfileOptionMenu handleEditMenu={handleEditSiren} handleDeleteMenu={handleDeleteSiren} />
			)}
		</Flex>
	);
};

export default SirenTitle;
