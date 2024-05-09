import { useRef } from "react";

import GroupIcon from "@/assets/svg/group.svg?react";
import KebabMenuIcon from "@/assets/svg/kebabMenu.svg?react";
import ScheduleModalCloseIcon from "@/assets/svg/scheduleModalClose.svg?react";

import { Box, Flex, Heading, Text } from "waggle-design-system";
import Comment from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/Comment/Comment";
import CommentInput from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/CommentInput/CommentInput";
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
  scheduleCommentBoxStyle,
} from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/ScheduleModal.style";
import useModal from "@/hooks/common/useModal";
import { useCancelMemberSchedule } from "@/hooks/api/schedule/useCancelMemberSchedule";
import { useDeleteTeamSchedule } from "@/hooks/api/schedule/useDeleteTeamSchedule";
import EditTeamScheduleModal from "@/components/Team/TeamSchedule/Modal/EditTeamScheduleModal";
import { useTeamInfo } from "@/hooks/team/useTeamInfo";
import { ko } from "date-fns/locale";
import { useCommentQuery } from "@/hooks/api/comment/useCommentQuery";
import useObserver from "@/hooks/common/useObserver";

const ScheduleModal = ({ schedule, position }: ScheduleModalType) => {
  const scheduleModalRef = useRef<HTMLDivElement>(null);
  const { closeScheduleModal, openModal } = useModal();
  const { name: teamName } = useTeamInfo(schedule.teamId);
  const { mutate: cancelMemberScheduleMutate } = useCancelMemberSchedule();
  const { mutate: deleteTeamScheduleMutate } = useDeleteTeamSchedule();
  const { commentData, fetchNextPage, hasNextPage, isFetching } = useCommentQuery(schedule.boardId);
  useClickOutSide(scheduleModalRef, closeScheduleModal);
  const commentBoxRef = useRef<HTMLDivElement>(null);
  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const handleCloseModal = () => {
    closeScheduleModal();
  };
  const handleCancelSchedule = () => {
    cancelMemberScheduleMutate(schedule.boardId);
    closeScheduleModal();
  };
  const handleDeleteSchedule = () => {
    deleteTeamScheduleMutate(schedule.boardId);
    closeScheduleModal();
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
    <section css={scheduleModalBoxStyle(position)} ref={scheduleModalRef}>
      <Flex
        styles={{ width: "100%", justify: "space-between", align: "center", marginBottom: "16px" }}
      >
        <Flex styles={{ align: "center", gap: "8px" }}>
          <Box css={circleDivStyle(schedule.teamColor)} />
          <Heading size="small" css={scheduleTitleStyle}>
            {schedule.title}
          </Heading>
        </Flex>
        <Flex styles={{ gap: "15px" }}>
          <OptionDropdown
            handleEditSchedule={handleEditSchedule}
            handleDeleteSchedule={handleDeleteSchedule}
            handleCancelSchedule={handleCancelSchedule}
            scheduleOwnerId={schedule.scheduleOwner.memberId}
          >
            <KebabMenuIcon css={scheduleModalIcon} />
          </OptionDropdown>
          <ScheduleModalCloseIcon css={scheduleModalIcon} onClick={handleCloseModal} />
        </Flex>
      </Flex>
      <Text css={scheduleModalTime}>
        {format(schedule.startDate, "yyyy년 M월d일 aa h시", { locale: ko })} ~
        {format(schedule.endDate, "yyyy년 M월d일 aa h시", { locale: ko })}
      </Text>
      <Flex styles={{ gap: "8px" }}>
        <GroupIcon />
        <Box css={scheduleModalTeamName(schedule.teamColor)}>{teamName}</Box>
      </Flex>
      <Flex
        styles={{ direction: "column", width: "100%", height: "300px", marginTop: "16px" }}
        css={scheduleCommentBoxStyle}
        tag="section"
        ref={commentBoxRef}
      >
        {commentData?.pages?.map((commentData, page) => (
          <Flex key={page} styles={{ direction: "column", gap: "8px" }}>
            {commentData.result.commentList.map((comment) => (
              <Comment key={comment.commentId} comment={comment} />
            ))}
          </Flex>
        ))}
        <div ref={ref} />
      </Flex>
      <CommentInput boardId={schedule.boardId} />
    </section>
  );
};

export default ScheduleModal;
