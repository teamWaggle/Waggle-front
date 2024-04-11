import { useMemo } from "react";

import ModalContainer from "@/components/common/Container/ModalContainer/ModalContainer";
import TimePickerCard from "@/components/common/TimePicker/TimePickerModal/TimePickerCard/TimePickerCard";
import { addMinutes, format } from "date-fns";

const TimePickerModal = () => {
  const generateTimeOptions = useMemo(() => {
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0); // 오후 6시로 설정
    const endTime = new Date();
    endTime.setHours(0, 0, 0, 0); // 오후 6시로 설정
    endTime.setDate(endTime.getDate() + 1); // 다음 날로 설정

    const timeOptions = Array.from(
      { length: Math.ceil((endTime.getTime() - startTime.getTime()) / (15 * 60 * 1000)) },
      (_, index) => {
        const currentTime = addMinutes(startTime, index * 15);
        return <TimePickerCard key={format(currentTime, "HH:mm")} day={currentTime} />;
      }
    );
    return timeOptions;
  }, []);
  return (
    <ModalContainer style={{ height: "300px", width: "200px" }}>
      {generateTimeOptions}
    </ModalContainer>
  );
};
export default TimePickerModal;
