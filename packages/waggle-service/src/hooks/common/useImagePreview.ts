import { useEffect, useState } from "react";

const useImagePreview = (value: File | string | null) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const newUrl = value instanceof File ? URL.createObjectURL(value) : value;
    if (newUrl !== imagePreview) {
      URL.revokeObjectURL(imagePreview || "");
      setImagePreview(newUrl);
    }
  }, [value]);

  return imagePreview;
};

export default useImagePreview;
