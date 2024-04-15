import { useEffect, useState } from "react";

const useImagePreview = (value: File | null) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const newUrl = value ? URL.createObjectURL(value) : null;
    if (newUrl !== imagePreview) {
      URL.revokeObjectURL(imagePreview || "");
      setImagePreview(newUrl);
    }
  }, [value]);

  return imagePreview;
};

export default useImagePreview;
