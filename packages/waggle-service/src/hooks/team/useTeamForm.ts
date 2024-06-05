import { EDIT_TEAM_FORM_KEY, CREATE_TEAM_FORM_KEY } from "@/constants/team";
import { usePostMediaMutation } from "@/hooks/api/media/usePostMediaMutation";
import { useCreateTeam } from "@/hooks/api/team/useCreateTeam";
import { useEditTeam } from "@/hooks/api/team/useEditTeam";
import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useTeamForm = (defaultValues?: FieldValues) => {
  const navigate = useNavigate();
  const isEdit = !!defaultValues;
  const { mutate: createTeamMutate } = useCreateTeam();
  const { mutate: editTeamMutate } = useEditTeam();
  const { mutateAsync } = usePostMediaMutation();

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    if (data.coverImageUrl instanceof File) {
      const imageFormData = new FormData();
      imageFormData.append("uploadImgFileList", data.coverImageUrl);
      await mutateAsync(imageFormData, {
        onSuccess: ({ result }) => {
          data.coverImageUrl = result.mediaList[0].imgUrl;
        },
      });
    }
    const formDataKey = defaultValues ? EDIT_TEAM_FORM_KEY : CREATE_TEAM_FORM_KEY;
    formData.append(formDataKey, JSON.stringify({ ...data }));
    defaultValues ? editTeamMutate(formData) : createTeamMutate(formData);
    navigate(-1);
  };
  const handleLeftArrowIconClick = () => {
    navigate(-1);
  };

  return { onSubmit, handleLeftArrowIconClick, isEdit };
};
