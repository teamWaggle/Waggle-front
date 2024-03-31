import { Flex, Box, Text } from "@/components/common";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import StoryProfile from "@/components/Story/StoryProfile/StoryProfile";

import useModal from "@/hooks/useModal";

import { convertToUTC } from "@/utils/convertToUTC";

import type { ReplyListInfoType } from "@/types/reply";

import {
	getCommentTextStyle,
	replyDateTextStyle,
} from "@/components/Story/StoryComment/Comment/Comment.style";

const ReplyItem = ({
	replyId,
	content,
	member,
	createdDate,
	handleReplyEditClick,
}: ReplyListInfoType) => {
	const modal = useModal();

	const handleDeleteReply = () => {
		modal.openModal({
			key: `DeleteWarningModal`,
			component: () => <DeleteWarningModal targetId={replyId} target="reply" />,
			isUpper: true,
			notCloseIcon: true,
		});
	};

	return (
		<Flex
			styles={{
				direction: "column",
				width: "100%",
			}}
		>
			{/* 프로필 영역 */}
			<StoryProfile
				img={member.profileImgUrl}
				nickname={member.nickname}
				editClick={() => handleReplyEditClick(content, replyId)}
				deleteClick={handleDeleteReply}
				ownerId={member.memberId}
			/>

			<Box styles={{ maxWidth: "215px", paddingLeft: "43px" }}>
				<Text size="small" css={getCommentTextStyle}>
					{content}
				</Text>
				<Text css={replyDateTextStyle}>{convertToUTC(new Date(createdDate)).date}</Text>
			</Box>
		</Flex>
	);
};

export default ReplyItem;
