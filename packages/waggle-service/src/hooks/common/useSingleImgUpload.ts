import { useState, useCallback } from "react";
import { flushSync } from "react-dom";
import { toast } from "react-toastify";

import { FILE_SIZE_MAX_LIMIT } from "@/constants/file";

import { usePostMediaMutation } from "@/hooks/api/media/usePostMediaMutation";

interface UseSingleImgUploadParams {
  prevImg?: string;
}

export const useSingleImgUpload = ({ prevImg }: UseSingleImgUploadParams) => {
  const { mutate: postMediaMutate } = usePostMediaMutation();

  const [isLoading, setIsLoading] = useState(true);

  const [uploadMedia, setUploadMedia] = useState<string>(prevImg ?? "");

  const convertToMediaUrl = useCallback(
    async (imageFile: File) => {
      const imgFormData = new FormData();

      imgFormData.append("uploadImgFileList", imageFile);

      postMediaMutate(imgFormData, {
        onSuccess: ({ result }) => {
          flushSync(() => {
            result.mediaList.forEach((media) => setUploadMedia(media.imgUrl));

            setIsLoading(false);
          });
        },
      });
    },
    [postMediaMutate]
  );

  const handleImgUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files?.[0];

      if (!files) return;

      if (files.size > FILE_SIZE_MAX_LIMIT) {
        toast.error("업로드 가능한 최대 용량은 1MB입니다. ");
        return;
      }

      await convertToMediaUrl(files);
    },
    [postMediaMutate, convertToMediaUrl]
  );

  return {
    isLoading,
    handleImgUpload,
    uploadMedia,
    convertToMediaUrl,
  };
};
