import DatePicker from "@/components/common/DatePicker/DatePicker";
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
          <DatePicker.Modal />
        </DatePicker>
        ~
        <DatePicker name="endDate">
          <DatePicker.Modal />
        </DatePicker>
      </Flex>
      <InputNotice message={startDateErrorMessage} isValid={startDateValid} />
      <InputNotice message={endDateErrorMessage} isValid={endDateValid} />
    </>
  );
};
export default DateRangeInputField;
