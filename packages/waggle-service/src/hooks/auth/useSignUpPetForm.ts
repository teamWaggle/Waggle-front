import { useState, useCallback } from "react";

import { PATH } from "@/constants/path";

import { usePetInfoMutation } from "@/hooks/api/pet/usePetInfoMutation";
import { usePutPetInfoMutation } from "@/hooks/api/pet/usePutPetInfoMutation";
import useModal from "@/hooks/useModal";

import type { SignUpPetFormType } from "@/types/auth";

interface UseSignUpPetFormParams {
  uploadMedia: string;
  isMyPage?: boolean;
  prevRequest?: {
    name?: string;
    gender?: string;
    age: string;
    breed: string;
    introduction: string;
  };
  petId?: number;
}

export const useSignUpPetForm = ({
  uploadMedia,
  isMyPage,
  prevRequest,
  petId,
}: UseSignUpPetFormParams) => {
  const { mutate: petInfoMutate } = usePetInfoMutation();
  const { mutate: putPetInfoMutate } = usePutPetInfoMutation();

  const modal = useModal();

  const [signUpPetRequest, setSignUpPetRequest] = useState(
    prevRequest ?? {
      name: "",
      age: "",
      gender: "FEMALE",
      breed: "",
      introduction: "",
    }
  );

  const validateForm = () => {
    if (
      !signUpPetRequest.name &&
      !signUpPetRequest.age &&
      !signUpPetRequest.breed &&
      !signUpPetRequest.introduction
    ) {
      return false;
    }

    return true;
  };

  const updateInputValue = useCallback(
    <Key extends keyof SignUpPetFormType>(key: Key, value: SignUpPetFormType[Key]) => {
      setSignUpPetRequest((prevSignUpPetRequest) => {
        const data = {
          ...prevSignUpPetRequest,
          [key]: value,
        };

        return data;
      });
    },
    []
  );

  const handleSaveClick = () => {
    const formData = new FormData();

    const createPetRequest = {
      name: signUpPetRequest.name,
      description: signUpPetRequest.introduction,
      breed: signUpPetRequest.breed,
      gender: signUpPetRequest.gender,
      age: signUpPetRequest.age,
      petProfileImg: uploadMedia,
    };

    if (validateForm()) {
      if (!petId) {
        formData.append("createPetRequest", JSON.stringify(createPetRequest));

        petInfoMutate(formData, {
          onSuccess: () => {
            if (isMyPage) {
              modal.closeModal();
            } else {
              window.location.href = PATH.ROOT;
            }
          },
        });
      } else {
        formData.append("updatePetRequest", JSON.stringify(createPetRequest));
        putPetInfoMutate(
          { petId, formData },
          {
            onSuccess: () => {
              modal.closeModal();
            },
          }
        );
      }
    }
  };

  return { signUpPetRequest, updateInputValue, handleSaveClick };
};
