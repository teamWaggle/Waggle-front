import DatePicker from "@/components/common/DatePicker/DatePicker";
import DatePickerCalendarModal from "@/components/common/DatePicker/DatePickerModal/DatePickerCalendarModal";
import Flex from "@/components/common/Design/Flex/Flex";
import InputNotice from "@/components/common/InputNotice/InputNotice";

import { useControlledForm } from "@/hooks/useControlledForm";

const DateRangeInputField = () => {
	const { isValid: startDateValid, errorMessage: startDateErrorMessage } =
		useControlledForm("startDate");
	const { isValid: endDateValid, errorMessage: endDateErrorMessage } = useControlledForm("endDate");

	return (
		<>
			<Flex style={{ alignItems: "center" }}>
				<DatePicker name="startDate">
					<DatePickerCalendarModal />
				</DatePicker>
				~
				<DatePicker name="endDate">
					<DatePickerCalendarModal />
				</DatePicker>
			</Flex>
			<InputNotice message={startDateErrorMessage} isValid={startDateValid} />
			<InputNotice message={endDateErrorMessage} isValid={endDateValid} />
		</>
	);
};
export default DateRangeInputField;
