import { useContext } from "react";

import { DatePickerContext } from "@/components/common/DatePicker/DatePicker";
import { format, isSameDay } from "date-fns";

import { useControlledForm } from "@/hooks/useControlledForm";

import { datePickerCalendarCardStyle } from "@/components/common/DatePicker/DatePickerModal/DatePickerCalendarCard/DatePickerCalendarCard.style";

const DatePickerCalendarCard = ({ day }: { day: Date | "" }) => {
  const { modalClose, name } = useContext(DatePickerContext);
  const { handleButtonOnClick, field } = useControlledForm(name);
  const handleOnclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (day) {
      handleButtonOnClick(e);
      modalClose();
    }
  };
  const value = day && day.toISOString();
  const isSelected = isSameDay(day, field.value);
  return (
    <button
      onClick={handleOnclick}
      value={value}
      css={datePickerCalendarCardStyle(day, isSelected)}
    >
      {day && format(day, "d")}
    </button>
  );
};

export default DatePickerCalendarCard;
