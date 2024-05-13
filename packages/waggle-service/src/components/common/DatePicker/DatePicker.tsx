import { createContext } from "react";
import type { FieldPath, FieldValues } from "react-hook-form";

import PickerTriggerButton from "@/components/common/Button/PickerTriggerButton/PickerTriggerButton";
import DatePickerCalendarModal from "@/components/common/DatePicker/DatePickerModal/DatePickerCalendarModal";
import ScheduleIcon from "@/assets/svg/schedule-icon.svg?react";

import useCalendar from "@/hooks/common/useCalendar";
import useModalTrigger from "@/hooks/common/useModalTrigger";

interface DatePickerContextProps {
  modalClose: () => void;
  currentDate: Date;
  handlePrevDate: () => void;
  handleNextDate: () => void;
  handleTriggerOnClick: () => void;
  limitDate?: Date;
  name: FieldPath<FieldValues>;
}

export const DatePickerContext = createContext<DatePickerContextProps>({
  modalClose: () => {},
  currentDate: new Date(),
  handlePrevDate: () => {},
  handleNextDate: () => {},
  handleTriggerOnClick: () => {},
  limitDate: new Date(),
  name: "",
});
const DatePicker = ({
  children,
  limitDate,
  name,
}: {
  children: React.ReactNode;
  limitDate?: Date;
  name: FieldPath<FieldValues>;
}) => {
  const { currentDate, handlePrevDate, handleNextDate } = useCalendar();
  const { isTrigger, handleTriggerOnClick, modalClose } = useModalTrigger();

  return (
    <DatePickerContext.Provider
      value={{
        name,
        modalClose,
        currentDate,
        handlePrevDate,
        handleNextDate,
        handleTriggerOnClick,
        limitDate,
      }}
    >
      <PickerTriggerButton
        name={name}
        modalClose={modalClose}
        handleTriggerOnClick={handleTriggerOnClick}
        icon={<ScheduleIcon style={{ marginLeft: "6px" }} />}
      >
        {isTrigger && children}
      </PickerTriggerButton>
    </DatePickerContext.Provider>
  );
};
export default DatePicker;

DatePicker.Modal = DatePickerCalendarModal;
