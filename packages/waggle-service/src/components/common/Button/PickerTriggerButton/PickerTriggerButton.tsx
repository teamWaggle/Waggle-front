import { useMemo, useRef } from "react";
import type { FieldPath, FieldValues } from "react-hook-form";

import ScheduleIcon from "@/assets/svg/schedule-icon.svg?react";

import Flex from "@/components/common/Design/Flex/Flex";
import Text from "@/components/common/Design/Text/Text";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import useClickOutSide from "@/hooks/useClickOutSide";
import { useControlledForm } from "@/hooks/useControlledForm";

import {
  PickerTriggerButtonBoxStyle,
  PickerTriggerButtonStyle,
} from "@/components/common/Button/PickerTriggerButton/PickerTriggerButton.style";

const PickerTriggerButton = ({
  children,
  modalClose,
  handleTriggerOnClick,
  name,
}: {
  children: React.ReactNode;
  modalClose: () => void;
  handleTriggerOnClick: () => void;
  name: FieldPath<FieldValues>;
}) => {
  const triggerRef = useRef(null);
  const { field } = useControlledForm(name);

  const handleFormat = useMemo((): string => {
    if (name.indexOf("Time") > 0) {
      return "a h:mm";
    }
    return "yyyy년 M월 d일";
  }, []);

  const today = new Date().setHours(0, 0, 0, 0);
  const dateToFormat = field.value ? new Date(field.value) : today;

  useClickOutSide(triggerRef, modalClose);
  return (
    <div ref={triggerRef}>
      <Flex css={PickerTriggerButtonBoxStyle}>
        <Text css={PickerTriggerButtonStyle} onClick={handleTriggerOnClick}>
          {format(dateToFormat, handleFormat, { locale: ko })}
          <ScheduleIcon style={{ marginLeft: "6px" }} />
        </Text>
        {children}
      </Flex>
    </div>
  );
};

export default PickerTriggerButton;
