import { useState } from "react";

export const useDragAndDrop = (onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragIn = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOut = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragOver(true);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragOver(false);
    onDragEnd?.(e);
  };

  return { isDragOver, handleDragIn, handleDragOut, handleDragOver, handleDrop };
};
