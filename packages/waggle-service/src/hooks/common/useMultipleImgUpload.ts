import { useState, useCallback } from "react";
import { flushSync } from "react-dom";
import { toast } from "react-toastify";

import { FILE_SIZE_MAX_LIMIT } from "@/constants/file";

import { usePostMediaMutation } from "@/hooks/api/media/usePostMediaMutation";

interface UseMultipleImgUploadParams {
  updateMediaList?: string[];
  updateFormImage?: CallableFunction;
}

export const useMultipleImgUpload = ({
  updateMediaList,
  updateFormImage,
}: UseMultipleImgUploadParams) => {
  const { mutate: postMediaMutate } = usePostMediaMutation();

  const [isLoading, setIsLoading] = useState(true);

  const [uploadMediaList, setUploadMediaList] = useState<string[]>(updateMediaList ?? []);

  const convertToMediaUrl = useCallback(
    async (imageFiles: FileList) => {
      const imgFiles: File[] = [];
      const imgFormData = new FormData();

      Array.from(imageFiles).forEach((file) => {
        imgFiles.push(file);
      });

      imgFiles.forEach((file) => {
        imgFormData.append("uploadImgFileList", file);
      });

      postMediaMutate(imgFormData, {
        onSuccess: ({ result }) => {
          const mediaList: string[] = [];
          result.mediaList.forEach((media) => mediaList.push(media.imgUrl));

          updateFormImage?.(mediaList);

          flushSync(() => {
            setUploadMediaList((prev) => [...prev, ...mediaList]);

            setIsLoading(false);
          });
        },
      });
    },
    [postMediaMutate, uploadMediaList]
  );

  const handleImgUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (!files) return;

      for (let i = 0; i < files.length; i++) {
        if (files[i].size > FILE_SIZE_MAX_LIMIT) {
          toast.error("업로드 가능한 최대 용량은 1MB입니다. ");
          return;
        }
      }

      await convertToMediaUrl(files);
    },
    [postMediaMutate, convertToMediaUrl, uploadMediaList]
  );

  const dropImgUpload = useCallback(
    async (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (!e.dataTransfer) {
        return;
      }

      const dropImgFiles = e.dataTransfer.files;

      if (!dropImgFiles) return;

      await convertToMediaUrl(dropImgFiles);
    },
    [postMediaMutate, convertToMediaUrl]
  );

  const handleImgRemove = useCallback(
    (selectMediaList: string) => {
      flushSync(() => {
        setUploadMediaList((prev) => {
          const updatedMediaList = prev.filter((media) => media !== selectMediaList);

          return updatedMediaList;
        });

        setIsLoading(false);
      });
    },
    [uploadMediaList]
  );

  return {
    isLoading,
    handleImgUpload,
    dropImgUpload,
    uploadMediaList,
    handleImgRemove,
  };
};
