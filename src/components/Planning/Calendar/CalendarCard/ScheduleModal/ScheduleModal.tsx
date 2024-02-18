import { useRef } from "react";

import { useResetRecoilState } from "recoil";

import { format } from "date-fns";

import GroupIcon from "@/assets/svg/group.svg?react";
import KebabMenuIcon from "@/assets/svg/kebabMenu.svg?react";
import ScheduleModalCloseIcon from "@/assets/svg/scheduleModalClose.svg?react";

import { Box, Flex, Heading, Text } from "@/components/common";
import Comment from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/Comment/Comment";
import { scheduleModalSelector } from "@/recoil/selectors/modalSelector";

import useClickOutSide from "@/hooks/useClickOutSide";

import type { ScheduleModalType } from "@/types/modal";

import {
	scheduleModalBoxStyle,
	circleDivStyle,
	scheduleModalIcon,
	scheduleTitleBoxStyle,
	scheduleTitleStyle,
	scheduleModalTime,
	scheduleModalTeamName,
	scheduleCommentBoxStyle,
	commentInputStyle,
	commentSubmitButtonStyle,
} from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/ScheduleModal.style";

const ScheduleModal = ({ schedule, position }: ScheduleModalType) => {
	const ScheduleModalRef = useRef<HTMLDivElement>(null);
	const closeScheduleModal = useResetRecoilState(scheduleModalSelector);
	useClickOutSide(ScheduleModalRef, closeScheduleModal);

	const handleCloseModal = () => {
		closeScheduleModal();
	};

	return (
		<section css={scheduleModalBoxStyle(position)} ref={ScheduleModalRef}>
			<Flex css={scheduleTitleBoxStyle}>
				<Flex styles={{ align: "center", gap: "8px" }}>
					<Box css={circleDivStyle(schedule.color)} />
					<Heading size="small" css={scheduleTitleStyle}>
						{schedule.title}
					</Heading>
				</Flex>
				<Flex styles={{ gap: "15px" }}>
					<KebabMenuIcon css={scheduleModalIcon} />
					<ScheduleModalCloseIcon css={scheduleModalIcon} onClick={handleCloseModal} />
				</Flex>
			</Flex>
			<Text css={scheduleModalTime}>{format(schedule.startTime, "yyyy년 M월dd일 aa h시")}</Text>
			<Flex styles={{ gap: "8px" }}>
				<GroupIcon />
				<Box css={scheduleModalTeamName(schedule.color)}>신나는 강아지 유치원</Box>
			</Flex>
			<Flex css={scheduleCommentBoxStyle}>
				<Comment />
				<Comment />
				<Comment />
				<Comment />
			</Flex>
			<Flex styles={{ width: "100%", marginTop: "8px" }}>
				<input placeholder="댓글 달기" type="text" css={commentInputStyle} />
				<button css={commentSubmitButtonStyle}>등록</button>
			</Flex>
		</section>
	);
};

export default ScheduleModal;
