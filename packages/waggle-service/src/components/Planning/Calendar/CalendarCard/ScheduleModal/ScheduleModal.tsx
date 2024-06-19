import { useRef, useContext, Suspense } from "react";

import GroupIcon from "@/assets/svg/group.svg?react";
import ContentIcon from "@/assets/svg/content.svg?react";
import KebabMenuIcon from "@/assets/svg/kebabMenu.svg?react";
import ScheduleModalCloseIcon from "@/assets/svg/scheduleModalClose.svg?react";

import { Box, Flex, Heading, Text } from "waggle-design-system";

import OptionDropdown from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/OptionDropdown/OptionDropdown";
import { format } from "date-fns";

import useClickOutSide from "@/hooks/common/useClickOutSide";

import type { ScheduleModalType } from "@/types/modal";

import {
  scheduleModalBoxStyle,
  circleDivStyle,
  scheduleModalIcon,
  scheduleTitleStyle,
  scheduleModalTime,
  scheduleModalTeamName,
  scheduleContentStyle,
  scheduleContentIconStyle,
  scheduleContentBoxStyle,
} from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/ScheduleModal.style";
import useModal from "@/hooks/common/useModal";
import { useCancelMemberSchedule } from "@/hooks/api/schedule/useCancelMemberSchedule";
import { useDeleteTeamSchedule } from "@/hooks/api/schedule/useDeleteTeamSchedule";
import EditTeamScheduleModal from "@/components/Team/TeamSchedule/Modal/EditTeamScheduleModal";
import { ko } from "date-fns/locale";
import CommentField from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/CommentField/CommentField";
import { ScheduleModalContext } from "@/components/Planning/Calendar/CalendarCard/context/ScheduleModalContext";

const ScheduleModal = ({ schedule, position, isMoreModal }: ScheduleModalType) => {
  const { boardId, teamName, scheduleOwner, teamColor, title, startDate, endDate, content } =
    schedule;
  const scheduleModalRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();
  const { mutate: cancelMemberScheduleMutate } = useCancelMemberSchedule();
  const { mutate: deleteTeamScheduleMutate } = useDeleteTeamSchedule();
  const { closeModal } = useContext(ScheduleModalContext);
  useClickOutSide(scheduleModalRef, closeModal);

  const handleCloseModal = () => {
    closeModal();
  };

  const handleCancelSchedule = () => {
    cancelMemberScheduleMutate(boardId);
    closeModal();
  };

  const handleDeleteSchedule = () => {
    deleteTeamScheduleMutate(boardId);
    closeModal();
  };

  const handleEditSchedule = () => {
    openModal({
      key: "EditSchedule",
      component: () => <EditTeamScheduleModal scheduleData={schedule} teamName={teamName} />,
      isWhiteIcon: true,
      isOutsideClose: false,
    });
  };
  return (
    <section css={scheduleModalBoxStyle(position, isMoreModal)} ref={scheduleModalRef}>
      <Flex
        styles={{ width: "100%", justify: "space-between", align: "center", marginBottom: "16px" }}
      >
        <Flex styles={{ align: "center", gap: "8px" }}>
          <Box css={circleDivStyle(teamColor)} />
          <Heading size="small" css={scheduleTitleStyle}>
            {title}
          </Heading>
        </Flex>
        <Flex styles={{ gap: "15px" }}>
          <OptionDropdown
            handleEditSchedule={handleEditSchedule}
            handleDeleteSchedule={handleDeleteSchedule}
            handleCancelSchedule={handleCancelSchedule}
            scheduleOwnerId={scheduleOwner.memberId}
          >
            <KebabMenuIcon css={scheduleModalIcon} />
          </OptionDropdown>
          <ScheduleModalCloseIcon css={scheduleModalIcon} onClick={handleCloseModal} />
        </Flex>
      </Flex>
      <Text css={scheduleModalTime}>
        {format(startDate, "yyyy년 M월 d일 aa h시 m분", { locale: ko })} ~{" "}
        {format(endDate, "yyyy년 M월 d일 aa h시 m분", { locale: ko })}
      </Text>
      <Flex styles={{ gap: "8px", marginBottom: "10px" }}>
        <GroupIcon />
        <Box css={scheduleModalTeamName(teamColor)}>{teamName}</Box>
      </Flex>
      <Flex styles={{ gap: "8px", width: "100%" }} css={scheduleContentBoxStyle}>
        <ContentIcon css={scheduleContentIconStyle} />
        <Text css={scheduleContentStyle}>
          {content}안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.
          안녕하세요.
        </Text>
      </Flex>
      <Suspense fallback={<div></div>}>
        <CommentField boardId={boardId} />
      </Suspense>
    </section>
  );
};

export default ScheduleModal;
