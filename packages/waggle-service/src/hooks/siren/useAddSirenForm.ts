import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { PATH } from "@/constants/path";

import { usePostSirenMutation } from "@/hooks/api/siren/usePostSirenMutation";
import { usePutSirenMutation } from "@/hooks/api/siren/usePutSirenMutation";

import type { SirenFormData } from "@/types/siren";

interface UseAddSirenFormParams {
  sirenId?: number;
  initialData?: SirenFormData;
}

export const useAddSirenForm = ({ sirenId, initialData }: UseAddSirenFormParams) => {
  const { mutate: postSirenMutate } = usePostSirenMutation();
  const { mutate: putSirenMutate } = usePutSirenMutation();

  const navigate = useNavigate();

  const [sirenRequest, setSirenRequest] = useState(
    initialData ?? {
      title: "",
      content: "",
      lostLocate: "",
      petBreed: "",
      petGender: "FEMALE",
      lostDate: "",
      petAge: "",
      contact: "",
      category: "PROTECT",
      mediaList: [],
    }
  );

  const updateInputValue = useCallback(
    <Key extends keyof SirenFormData>(key: Key, value: SirenFormData[Key]) => {
      setSirenRequest((prevSirenRequest) => {
        const data = {
          ...prevSirenRequest,
          [key]: value,
        };

        return data;
      });
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    if (!sirenId) {
      formData.append("createSirenRequest", JSON.stringify(sirenRequest));

      postSirenMutate(formData, {
        onSuccess: () => {
          navigate(PATH.SIREN);
        },
      });
    } else {
      formData.append("updateSirenRequest", JSON.stringify(sirenRequest));

      putSirenMutate(
        {
          sirenId,
          formData,
        },
        {
          onSuccess: () => {
            navigate(PATH.SIREN_DETAIL(String(sirenId)));
          },
        }
      );
    }
  };

  return { sirenRequest, updateInputValue, handleSubmit };
};
