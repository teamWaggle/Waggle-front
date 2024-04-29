import TeamScheduleInputModal from "@/components/Team/TeamSchedule/Modal/TeamScheduleInputModal";
import { useEditTeamSchedule } from "@/hooks/api/schedule/useEditTeamSchedule";
import useModal from "@/hooks/common/useModal";
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
  const { selectCloseModal } = useModal();
  const handleSubmit = (data: FieldValues) => {
    const convertedTeamScheduleData = convertToTeamScheduleDataFormat(data);
    editTeamSchedule(convertedTeamScheduleData, {
      onSuccess: () => {
        selectCloseModal("EditSchedule");
      },
    });
  };

  return (
    <TeamScheduleInputModal
      modalTitle="일정 수정"
      handleSubmit={handleSubmit}
      defaultValues={defaultValues}
    />
  );
};
export default EditTeamScheduleModal;
