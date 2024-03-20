import { useContext, useRef } from "react";

import ScheduleIcon from "@/assets/svg/schedule-icon.svg?react";

import { DatePickerProvider } from "@/components/common/DatePicker/DatePicker";
import Flex from "@/components/common/Flex/Flex";
import Text from "@/components/common/Text/Text";
import { format } from "date-fns";

import useClickOutSide from "@/hooks/useClickOutSide";

import { datePickerTriggerBoxStyle } from "@/components/common/DatePicker/DatePickerTrigger/DatePickerTrigger.style";

const DatePickerTrigger = ({ children }: { children: React.ReactNode }) => {
	const { selectedDate, modalClose, handleTriggerOnClick } = useContext(DatePickerProvider);
	const triggerRef = useRef(null);
	useClickOutSide(triggerRef, modalClose);
	return (
		<div ref={triggerRef}>
			<Flex css={datePickerTriggerBoxStyle}>
				<Text onClick={handleTriggerOnClick}>
					{format(selectedDate, "yyyy년 M월 d일")}
					<ScheduleIcon style={{ marginLeft: "6px" }} />
				</Text>
				{children}
			</Flex>
		</div>
	);
};

export default DatePickerTrigger;
