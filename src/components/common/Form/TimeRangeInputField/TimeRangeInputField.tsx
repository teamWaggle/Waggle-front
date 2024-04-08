import DatePicker from "@/components/common/DatePicker/DatePicker";
import DatePickerTimeModal from "@/components/common/DatePicker/DatePickerModal/Time/DatePickerTimeModal";
import Flex from "@/components/common/Design/Flex/Flex";
import Text from "@/components/common/Design/Text/Text";
import InputNotice from "@/components/common/InputNotice/InputNotice";

import { useControlledForm } from "@/hooks/useControlledForm";

const TimeRangeInputField = ({ validateText }: { validateText?: string }) => {
	const { isValid: startTimeValid, errorMessage: startTimeErrorMessage } =
		useControlledForm("startTime");
	const { isValid: endTimeeValid, errorMessage: endTimeErrorMessage } =
		useControlledForm("endTime");
	return (
		<>
			<Flex style={{ alignItems: "center" }}>
				<DatePicker name="startTime" selectedDate={new Date()} editSelectedDate={() => {}}>
					<DatePickerTimeModal />
				</DatePicker>
				<Text>~</Text>
				<DatePicker selectedDate={new Date()} editSelectedDate={() => {}} name="endTime">
					<DatePickerTimeModal />
				</DatePicker>
			</Flex>
			<InputNotice message={startTimeErrorMessage || validateText} isValid={startTimeValid} />
			<InputNotice message={endTimeErrorMessage || validateText} isValid={endTimeeValid} />
		</>
	);
};
export default TimeRangeInputField;
