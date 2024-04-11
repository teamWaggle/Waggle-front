import { createContext } from "react";
import type { FieldPath, FieldValues } from "react-hook-form";

import PickerTriggerButton from "@/components/common/Button/PickerTriggerButton/PickerTriggerButton";
import TimePickerModal from "@/components/common/TimePicker/TimePickerModal/TimePickerModal";

import useModalTrigger from "@/hooks/useModalTrigger";

interface TimePickerContextProps {
  handleTriggerOnClick: () => void;
  modalClose: () => void;
  name: FieldPath<FieldValues>;
}

export const TimePickerContext = createContext<TimePickerContextProps>({
  handleTriggerOnClick: () => {},
  modalClose: () => {},
  name: "",
});

export const TimePicker = ({
  name,
  children,
}: {
  name: FieldPath<FieldValues>;
  children: React.ReactNode;
}) => {
  const { isTrigger, handleTriggerOnClick, modalClose } = useModalTrigger();

  return (
    <TimePickerContext.Provider value={{ handleTriggerOnClick, modalClose, name }}>
      <PickerTriggerButton
        handleTriggerOnClick={handleTriggerOnClick}
        modalClose={modalClose}
        name={name}
      >
        {isTrigger && children}
      </PickerTriggerButton>
    </TimePickerContext.Provider>
  );
};

TimePicker.Modal = TimePickerModal;
