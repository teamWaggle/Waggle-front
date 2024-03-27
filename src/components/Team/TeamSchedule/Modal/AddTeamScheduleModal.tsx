import AddIcon from "@/assets/svg/add-icon.svg?react";

import {
	Box,
	DatePicker,
	DatePickerCalendarModal,
	DatePickerTimeModal,
	Flex,
	Heading,
	Text,
} from "@/components/common";

import useCalendar from "@/hooks/useCalendar";
import useModal from "@/hooks/useModal";

import {
	TeamScheduleModalAddButtonStyle,
	addTeamScheduleModalBoxStyle,
	addTeamScheduleModalContentBoxStyle,
	addTeamScheduleModalContentTitleStyle,
	addTeamScheduleModalInputStyle,
	addTeamScheduleModalTextAreaStyle,
	addTeamScheduleModalTitleBoxStyle,
	addTeamScheduleTitleCircleStyle,
} from "@/components/Team/TeamSchedule/Modal/AddTeamScheduleModal.style";

const AddTeamScheduleModal = () => {
	const { closeModal } = useModal();
	const { selectedStartDate, selectedEndDate, editSelectedStartDate, editSelectedEndDate } =
		useCalendar();
	const handleAddSchedule = () => {
		closeModal();
	};
	return (
		<Flex css={addTeamScheduleModalBoxStyle}>
			<Box css={addTeamScheduleModalTitleBoxStyle("team1")}>
				<Flex style={{ alignItems: "center" }}>
					<Box css={addTeamScheduleTitleCircleStyle} />
					<Text size="xLarge">team name</Text>
				</Flex>
				<Heading size="medium">일정 추가</Heading>
			</Box>
			<Box css={addTeamScheduleModalContentBoxStyle}>
				<Box style={{ marginBottom: "16px" }}>
					<Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
						일정 이름
					</Heading>
					<input
						placeholder="일정의 이름을 입력해주세요"
						type="text"
						css={addTeamScheduleModalInputStyle}
					/>
				</Box>
				<Box style={{ marginBottom: "16px" }}>
					<Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
						날짜
					</Heading>
					<Flex style={{ alignItems: "center", marginTop: "8px" }}>
						<DatePicker selectedDate={selectedStartDate} editSelectedDate={editSelectedStartDate}>
							<DatePickerCalendarModal />
						</DatePicker>
						~
						<DatePicker selectedDate={selectedEndDate} editSelectedDate={editSelectedEndDate}>
							<DatePickerCalendarModal />
						</DatePicker>
					</Flex>
				</Box>
				<Box style={{ marginBottom: "16px" }}>
					<Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
						시간
					</Heading>
					<Flex style={{ alignItems: "center", marginTop: "8px" }}>
						<DatePicker formatType="time" selectedDate={new Date()} editSelectedDate={() => {}}>
							<DatePickerTimeModal />
						</DatePicker>
						<Text>~</Text>
						<DatePicker formatType="time" selectedDate={new Date()} editSelectedDate={() => {}}>
							<DatePickerTimeModal />
						</DatePicker>
					</Flex>
				</Box>
				<Box style={{ marginBottom: "16px" }}>
					<Heading size="xSmall" css={addTeamScheduleModalContentTitleStyle}>
						일정 설명
					</Heading>
					<textarea
						placeholder="일정의 설명을 입력해주세요"
						css={addTeamScheduleModalTextAreaStyle}
					/>
				</Box>
				<Flex style={{ justifyContent: "end" }}>
					<Flex
						tag="button"
						css={TeamScheduleModalAddButtonStyle("team1")}
						onClick={handleAddSchedule}
					>
						<Text size="xSmall">일정 추가</Text>
						<AddIcon />
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);
};
export default AddTeamScheduleModal;
