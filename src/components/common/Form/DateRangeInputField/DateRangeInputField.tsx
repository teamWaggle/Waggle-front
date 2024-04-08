import DatePicker from "@/components/common/DatePicker/DatePicker";
import DatePickerCalendarModal from "@/components/common/DatePicker/DatePickerModal/Calendar/DatePickerCalendarModal";
import Flex from "@/components/common/Design/Flex/Flex";
import InputNotice from "@/components/common/InputNotice/InputNotice";

import useCalendar from "@/hooks/useCalendar";
import { useControlledForm } from "@/hooks/useControlledForm";

const DateRangeInputField = () => {
	const { selectedStartDate, selectedEndDate, editSelectedStartDate, editSelectedEndDate } =
		useCalendar();
	const { isValid: startDateValid, errorMessage: startDateErrorMessage } =
		useControlledForm("startDate");
	const { isValid: endDateValid, errorMessage: endDateErrorMessage } = useControlledForm("endDate");

	return (
		<>
			<Flex style={{ alignItems: "center" }}>
				<DatePicker
					name="startDate"
					selectedDate={selectedStartDate}
					editSelectedDate={editSelectedStartDate}
				>
					<DatePickerCalendarModal />
				</DatePicker>
				~
				<DatePicker
					name="endDate"
					selectedDate={selectedEndDate}
					editSelectedDate={editSelectedEndDate}
				>
					<DatePickerCalendarModal />
				</DatePicker>
			</Flex>
			<InputNotice message={startDateErrorMessage} isValid={startDateValid} />
			<InputNotice message={endDateErrorMessage} isValid={endDateValid} />
		</>
	);
};
export default DateRangeInputField;
