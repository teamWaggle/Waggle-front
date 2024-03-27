import { useContext } from "react";

import { DatePickerProvider } from "@/components/common/DatePicker/DatePicker";
import Flex from "@/components/common/Design/Flex/Flex";
import Text from "@/components/common/Design/Text/Text";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import { DatePickerTimeCardBoxStyle } from "@/components/common/DatePicker/DatePickerModal/Time/DatePickerTimeCard/DatePickerTimeCard.style";

const DatePickerTimeCard = ({ day }: { day: Date }) => {
	const { editSelectedDate, selectedDate, modalClose } = useContext(DatePickerProvider);
	const handleOnclick = () => {
		if (day) {
			editSelectedDate(day);
			modalClose();
		}
	};
	return (
		<Flex css={DatePickerTimeCardBoxStyle(selectedDate)} onClick={handleOnclick}>
			<Text size="large">{format(day, "a h:mm", { locale: ko })}</Text>
		</Flex>
	);
};
export default DatePickerTimeCard;
