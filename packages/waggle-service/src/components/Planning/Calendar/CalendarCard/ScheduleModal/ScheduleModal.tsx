import { useRef } from "react";

import { useResetRecoilState } from "recoil";

import GroupIcon from "@/assets/svg/group.svg?react";
import KebabMenuIcon from "@/assets/svg/kebabMenu.svg?react";
import ScheduleModalCloseIcon from "@/assets/svg/scheduleModalClose.svg?react";

import { Box, Flex, Heading, Text } from "@/components/common";
import Comment from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/Comment/Comment";
import CommentInput from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/CommentInput/CommentInput";
import OptionDropdown from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/OptionDropdown/OptionDropdown";
import { format } from "date-fns";

import useClickOutSide from "@/hooks/useClickOutSide";

import { scheduleModalSelector } from "@/recoil/selectors/modalSelector";

import type { ScheduleModalType } from "@/types/modal";

import {
  scheduleModalBoxStyle,
  circleDivStyle,
  scheduleModalIcon,
  scheduleTitleBoxStyle,
  scheduleTitleStyle,
  scheduleModalTime,
  scheduleModalTeamName,
  scheduleCommentBoxStyle,
} from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/ScheduleModal.style";

const ScheduleModal = ({ schedule, position }: ScheduleModalType) => {
  const scheduleModalRef = useRef<HTMLDivElement>(null);
  const closeScheduleModal = useResetRecoilState(scheduleModalSelector);
  useClickOutSide(scheduleModalRef, closeScheduleModal);

  const handleCloseModal = () => {
    closeScheduleModal();
  };
  return (
    <section css={scheduleModalBoxStyle(position)} ref={scheduleModalRef}>
      <Flex css={scheduleTitleBoxStyle}>
        <Flex styles={{ align: "center", gap: "8px" }}>
          <Box css={circleDivStyle(schedule.teamColor)} />
          <Heading size="small" css={scheduleTitleStyle}>
            {schedule.title}
          </Heading>
        </Flex>
        <Flex styles={{ gap: "15px" }}>
          <OptionDropdown>
            <KebabMenuIcon css={scheduleModalIcon} />
          </OptionDropdown>
          <ScheduleModalCloseIcon css={scheduleModalIcon} onClick={handleCloseModal} />
        </Flex>
      </Flex>
      <Text css={scheduleModalTime}>
        `${format(schedule.startTime, "yyyy년 M월dd일 aa h시")} ~ $
        {format(schedule.endTime, "yyyy년 M월dd일 aa h시")}`
      </Text>
      <Flex styles={{ gap: "8px" }}>
        <GroupIcon />
        <Box css={scheduleModalTeamName(schedule.teamColor)}>신나는 강아지 유치원</Box>
      </Flex>
      <Flex css={scheduleCommentBoxStyle}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Flex>
      <CommentInput />
    </section>
  );
};

export default ScheduleModal;
