import { requestTeamParticipation } from "@/api/team/requestTeamParticipation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useRequestTeamParticipation = () => {
  return useMutation({
    mutationFn: requestTeamParticipation,
    onSuccess: () => {
      toast.success("가입 신청이 완료되었습니다.");
    },
  });
};
