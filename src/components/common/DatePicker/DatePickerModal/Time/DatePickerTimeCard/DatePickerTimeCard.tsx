import { useContext } from "react";

import { DatePickerContext } from "@/components/common/DatePicker/DatePicker";
import Text from "@/components/common/Design/Text/Text";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import { useControlledForm } from "@/hooks/useControlledForm";

import { DatePickerTimeCardBoxStyle } from "@/components/common/DatePicker/DatePickerModal/Time/DatePickerTimeCard/DatePickerTimeCard.style";

const DatePickerTimeCard = ({ day }: { day: Date }) => {
	const { modalClose, name } = useContext(DatePickerContext);
	const { handleButtonOnClick } = useControlledForm(name);
	const handleOnclick = (e: React.MouseEvent<HTMLButtonElement>) => {
		handleButtonOnClick(e);
		modalClose();
	};
	const value = day && day.toISOString();
	return (
		<button css={DatePickerTimeCardBoxStyle(value)} value={value} onClick={handleOnclick}>
			<Text size="large">{format(day, "a h:mm", { locale: ko })}</Text>
		</button>
	);
};
export default DatePickerTimeCard;
