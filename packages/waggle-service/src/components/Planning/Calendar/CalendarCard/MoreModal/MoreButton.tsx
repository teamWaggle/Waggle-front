import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { Box, Text } from "waggle-design-system";

import useClickOutSide from "@/hooks/common/useClickOutSide";
import useModalTrigger from "@/hooks/common/useModalTrigger";

import type { ScheduleType } from "@/types/planning";

import {
  moreBoxStyle,
  moreTextStyle,
} from "@/components/Planning/Calendar/CalendarCard/MoreModal/MoreButton.style";
interface TempButtonProps {
  schedules: ScheduleType[];
}

const MoreButton = ({ schedules, children }: PropsWithChildren<TempButtonProps>) => {
  const { isTrigger, handleTriggerOnClick, modalClose } = useModalTrigger();
  const moreButtonRef = useRef(null);
  useClickOutSide(moreButtonRef, modalClose);
  return (
    <section ref={moreButtonRef}>
      <Box css={moreBoxStyle}>
        <Text size="xSmall" onClick={handleTriggerOnClick} css={moreTextStyle}>
          {schedules.length - 2}개 더보기
        </Text>
        {isTrigger && children}
      </Box>
    </section>
  );
};

export default MoreButton;
