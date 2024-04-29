import TeamScheduleInputModal from "@/components/Team/TeamSchedule/Modal/TeamScheduleInputModal";
import { useEditTeamSchedule } from "@/hooks/api/schedule/useEditTeamSchedule";
import useModal from "@/hooks/common/useModal";
import type { ScheduleType } from "@/types/planning";
import { convertToTeamScheduleDataFormat } from "@/utils/convertToTeamScheduleDataFormat";
import type { FieldValues } from "react-hook-form";

const EditTeamScheduleModal = ({
  scheduleData,
  teamName,
}: {
  scheduleData: ScheduleType;
  teamName: string;
}) => {
  const { teamColor, boardId: scheduleId, title, content, startDate, endDate } = scheduleData;
  const { mutate: editTeamSchedule } = useEditTeamSchedule(scheduleId);
  const { selectCloseModal } = useModal();
  const handleSubmit = (data: FieldValues) => {
    const convertedTeamScheduleData = convertToTeamScheduleDataFormat(data);
    editTeamSchedule(convertedTeamScheduleData, {
      onSuccess: () => {
        selectCloseModal("EditSchedule");
      },
    });
  };

  const editDefaultValues = {
    title: title,
    content: content,
    startDate: startDate,
    endDate: endDate,
    endTime: endDate,
    startTime: startDate,
  };

  return (
    <TeamScheduleInputModal
      teamColor={teamColor}
      teamName={teamName}
      modalTitle="일정 수정"
      handleSubmit={handleSubmit}
      defaultValues={editDefaultValues}
    />
  );
};
export default EditTeamScheduleModal;
