import { useRef } from "react";

import { useResetRecoilState } from "recoil";

import { format } from "date-fns";

import { Box, Flex, Text } from "@/components/common";
import ScheduleModal from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/ScheduleModal";
import { moreModalSelector } from "@/recoil/selectors/modalSelector";

import { MAX_CALENDAR_CONTENT } from "@/constants/calendar";

import useClickOutSide from "@/hooks/useClickOutSide";
import useModal from "@/hooks/useModal";

import type { MoreModalType } from "@/types/modal";
import type { ScheduleType } from "@/types/planning";

import {
	moreModalContainerStyle,
	moreModalDateStyle,
	moreModalDayStyle,
	moreModalScheduleTextStyle,
	moreModalScheduleBoxStyle,
} from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreModal.style";

const Week = ["일", "월", "화", "수", "목", "금", "토"];

const MoreModal = ({ day, schedules, position }: MoreModalType) => {
	const { openScheduleModal } = useModal();
	const closeMoreModal = useResetRecoilState(moreModalSelector);
	const moreModalRef = useRef<HTMLDivElement>(null);

	const handleScheduleOnclick = (schedule: ScheduleType) => {
		closeMoreModal();
		openScheduleModal({
			key: format(day, "d"),
			component: () => <ScheduleModal schedule={schedule} position={position} />,
		});
	};

	useClickOutSide(moreModalRef, closeMoreModal);

	const schedulesSlice = schedules.slice(MAX_CALENDAR_CONTENT);
	return (
		<section ref={moreModalRef}>
			<Flex css={moreModalContainerStyle}>
				<Text css={moreModalDayStyle}>{Week[day.getDay()]}</Text>
				<Text css={moreModalDateStyle}>{day.getDate()}</Text>
				<Box css={moreModalScheduleBoxStyle}>
					{schedulesSlice.map((schedule, i) => (
						<Box
							key={i}
							css={moreModalScheduleTextStyle(schedule.color)}
							onClick={() => handleScheduleOnclick(schedule)}
						>
							{schedule.title}
						</Box>
					))}
				</Box>
			</Flex>
		</section>
	);
};

export default MoreModal;
