import { useMemo, useRef } from "react";
import type { FieldPath, FieldValues } from "react-hook-form";

import { Flex, Text } from "waggle-design-system";

import ScheduleIcon from "@/assets/svg/schedule-icon.svg?react";

import { format } from "date-fns";
import { ko } from "date-fns/locale";

import useClickOutSide from "@/hooks/common/useClickOutSide";
import { useControlledForm } from "@/hooks/common/useControlledForm";

import { PickerTriggerButtonStyle } from "@/components/common/Button/PickerTriggerButton/PickerTriggerButton.style";

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

  const handleDefaultFormat = useMemo(() => {
    if (name === "startDate") {
      return "시작일";
    }
    return "종료일";
  }, []);

  const dateToFormat = field.value
    ? format(field.value, handleFormat, { locale: ko })
    : handleDefaultFormat;

  useClickOutSide(triggerRef, modalClose);
  return (
    <div ref={triggerRef}>
      <Flex styles={{ align: "center", position: "relative", borderRadius: "2px" }}>
        <Text css={PickerTriggerButtonStyle} onClick={handleTriggerOnClick}>
          {dateToFormat}
          <ScheduleIcon style={{ marginLeft: "6px" }} />
        </Text>
        {children}
      </Flex>
    </div>
  );
};

export default PickerTriggerButton;
