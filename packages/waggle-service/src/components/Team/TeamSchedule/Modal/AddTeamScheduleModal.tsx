import TeamScheduleInputModal from "@/components/Team/TeamSchedule/Modal/TeamScheduleInputModal";
import useModal from "@/hooks/common/useModal";
import type { FieldValues } from "react-hook-form";
import { convertToTeamScheduleDataFormat } from "@/utils/convertToTeamScheduleDataFormat";
import { useAddTeamSchedule } from "@/hooks/api/schedule/useAddTeamSchedule";
import type { TeamColorType } from "@/types/team";
import { TEAM_SCHEDULE_DEFAULT_VALUES } from "@/constants/team";

const AddTeamScheduleModal = ({
  teamId,
  teamName,
  teamColor,
}: {
  teamName: string;
  teamId: number;
  teamColor: TeamColorType;
}) => {
  const { selectCloseModal } = useModal();
  const { mutate: addTeamSchedule } = useAddTeamSchedule(teamId);

  const handleSubmit = (data: FieldValues) => {
    const convertedTeamScheduleData = convertToTeamScheduleDataFormat(data);
    addTeamSchedule(convertedTeamScheduleData, {
      onSuccess: () => {
        selectCloseModal("AddSchedule");
      },
    });
  };

  return (
    <TeamScheduleInputModal
      teamColor={teamColor}
      teamName={teamName}
      modalTitle="일정 추가"
      handleSubmit={handleSubmit}
      defaultValues={TEAM_SCHEDULE_DEFAULT_VALUES}
    />
  );
};
export default AddTeamScheduleModal;
