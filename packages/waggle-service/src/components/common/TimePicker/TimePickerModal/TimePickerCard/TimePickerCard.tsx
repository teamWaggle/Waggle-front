import { useContext } from "react";

import Text from "@/components/common/Design/Text/Text";
import { TimePickerContext } from "@/components/common/TimePicker/TimePicker";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import { useControlledForm } from "@/hooks/useControlledForm";

import { TimePickerCardBoxStyle } from "@/components/common/TimePicker/TimePickerModal/TimePickerCard/TimePickerCard.style";

const TimePickerCard = ({ day }: { day: Date }) => {
  const { modalClose, name } = useContext(TimePickerContext);
  const { handleButtonOnClick } = useControlledForm(name);
  const handleOnclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleButtonOnClick(e);
    modalClose();
  };
  const value = day && day.toISOString();
  return (
    <button css={TimePickerCardBoxStyle(value)} value={value} onClick={handleOnclick}>
      <Text size="large">{format(day, "a h:mm", { locale: ko })}</Text>
    </button>
  );
};
export default TimePickerCard;
