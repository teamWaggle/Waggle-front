import TeamScheduleInputModal from "@/components/Team/TeamSchedule/Modal/TeamScheduleInputModal";
import { useEditTeamSchedule } from "@/hooks/api/schedule/useEditTeamSchedule";
import { convertToTeamScheduleDataFormat } from "@/utils/convertToTeamScheduleDataFormat";
import type { FieldValues } from "react-hook-form";

const EditTeamScheduleModal = ({
  defaultValues,
  scheduleId,
}: {
  defaultValues: FieldValues;
  scheduleId: number;
}) => {
  const { mutate: editTeamSchedule } = useEditTeamSchedule(scheduleId);
  const onSubmit = (data: FieldValues) => {
    const convertedTeamScheduleData = convertToTeamScheduleDataFormat(data);
    editTeamSchedule(convertedTeamScheduleData);
  };

  return (
    <TeamScheduleInputModal
      modalTitle="일정 수정"
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    />
  );
};
export default EditTeamScheduleModal;
