import Flex from "@/components/common/Design/Flex/Flex";
import Text from "@/components/common/Design/Text/Text";
import InputNotice from "@/components/common/InputNotice/InputNotice";
import { TimePicker } from "@/components/common/TimePicker/TimePicker";

import { useControlledForm } from "@/hooks/useControlledForm";

const TimeRangeInputField = ({ validateText }: { validateText?: string }) => {
  const { isValid: startTimeValid, errorMessage: startTimeErrorMessage } =
    useControlledForm("startTime");
  const { isValid: endTimeeValid, errorMessage: endTimeErrorMessage } =
    useControlledForm("endTime");
  return (
    <>
      <Flex style={{ alignItems: "center" }}>
        <TimePicker name="startTime">
          <TimePicker.Modal />
        </TimePicker>
        <Text>~</Text>
        <TimePicker name="endTime">
          <TimePicker.Modal />
        </TimePicker>
      </Flex>
      <InputNotice message={startTimeErrorMessage || validateText} isValid={startTimeValid} />
      <InputNotice message={endTimeErrorMessage || validateText} isValid={endTimeeValid} />
    </>
  );
};
export default TimeRangeInputField;
