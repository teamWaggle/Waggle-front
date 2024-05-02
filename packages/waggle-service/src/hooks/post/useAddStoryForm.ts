import { useState, useCallback } from "react";

import { usePostStoryMutation } from "@/hooks/api/story/usePostStoryMutation";
import { usePutStoryMutation } from "@/hooks/api/story/usePutStoryMutation";
import useModal from "@/hooks/common/useModal";

import type { StoryFormData } from "@/types/story";

interface UseAddStoryFormParams {
  storyId?: number;
  initialData?: StoryFormData;
  mediaList?: string[];
}

export const useAddStoryForm = ({ storyId, initialData, mediaList }: UseAddStoryFormParams) => {
  const { mutate: postStoryMutate } = usePostStoryMutation();
  const { mutate: putStoryMutate } = usePutStoryMutation();

  const { closeModal } = useModal();

  const [storyRequest, setStoryRequest] = useState(
    initialData ?? {
      content: "",
      hashtagList: ["test"],
      mediaList,
    }
  );

  const updateInputValue = useCallback(
    <Key extends keyof StoryFormData>(key: Key, value: StoryFormData[Key]) => {
      setStoryRequest((prevStoryRequest) => {
        const data = {
          ...prevStoryRequest,
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

    if (!storyId) {
      formData.append("createStoryRequest", JSON.stringify(storyRequest));

      postStoryMutate(formData, {
        onSuccess: () => {
          closeModal();
        },
      });
    } else {
      formData.append("updateStoryRequest", JSON.stringify(storyRequest));

      putStoryMutate(
        {
          storyId,
          formData,
        },
        {
          onSuccess: () => {
            closeModal();
          },
        }
      );
    }
  };

  return { storyRequest, updateInputValue, handleSubmit };
};
