import DatePicker from "@/components/common/DatePicker/DatePicker";
import Flex from "@/components/common/Design/Flex/Flex";
import InputNotice from "@/components/common/InputNotice/InputNotice";
import { TimePicker } from "@/components/common/TimePicker/TimePicker";

import { useControlledForm } from "@/hooks/common/useControlledForm";

interface DateRangeInputFieldProps {
  dateName: string;
  TimeName: string;
}

const DateRangeInputField = ({ dateName, TimeName }: DateRangeInputFieldProps) => {
  const { isValid: startDateValid, errorMessage: startDateErrorMessage } =
    useControlledForm(dateName);
  const { isValid: endDateValid, errorMessage: endDateErrorMessage } = useControlledForm(TimeName);

  return (
    <>
      <Flex style={{ flexDirection: "column" }}>
        <Flex style={{ alignItems: "center", gap: "8px" }}>
          <DatePicker name={dateName}>
            <DatePicker.Modal />
          </DatePicker>

          <TimePicker name={TimeName}>
            <TimePicker.Modal />
          </TimePicker>
        </Flex>
        <InputNotice message={startDateErrorMessage} isValid={startDateValid} />
        <InputNotice message={endDateErrorMessage} isValid={endDateValid} />
      </Flex>
    </>
  );
};
export default DateRangeInputField;
