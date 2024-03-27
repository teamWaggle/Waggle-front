import { useContext, useMemo, useRef } from "react";

import ScheduleIcon from "@/assets/svg/schedule-icon.svg?react";

import { DatePickerProvider } from "@/components/common/DatePicker/DatePicker";
import Flex from "@/components/common/Design/Flex/Flex";
import Text from "@/components/common/Design/Text/Text";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import useClickOutSide from "@/hooks/useClickOutSide";

import { datePickerTriggerBoxStyle } from "@/components/common/DatePicker/DatePickerTrigger/DatePickerTrigger.style";

const DatePickerTrigger = ({ children }: { children: React.ReactNode }) => {
	const { selectedDate, modalClose, handleTriggerOnClick, formatType } =
		useContext(DatePickerProvider);
	const triggerRef = useRef(null);

	const handleFormat = useMemo((): string => {
		switch (formatType) {
			case "time":
				return "a h:mm";
			case "date":
				return "yyyy년 M월 d일";
			default:
				return "yyyy년 M월 d일";
		}
	}, [formatType]);

	useClickOutSide(triggerRef, modalClose);

	return (
		<div ref={triggerRef}>
			<Flex css={datePickerTriggerBoxStyle}>
				<Text onClick={handleTriggerOnClick}>
					{format(new Date(selectedDate), handleFormat, { locale: ko })}
					<ScheduleIcon style={{ marginLeft: "6px" }} />
				</Text>
				{children}
			</Flex>
		</div>
	);
};

export default DatePickerTrigger;
