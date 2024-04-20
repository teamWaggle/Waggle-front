import { useState, useRef } from "react";

import useClickOutSide from "@/hooks/common/useClickOutSide";

export const useNotificationTrigger = () => {
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);

  const notiRef = useRef<HTMLDivElement>(null);

  const handleNotiOpen = () => {
    if (isNotiOpen) {
      setTimeout(() => {
        setIsNotiOpen(false);
      }, 200);
    } else {
      setIsNotiOpen(true);
    }
    setIsFadeIn((prev) => !prev);
  };

  const handleNotiOutside = () => {
    setTimeout(() => {
      setIsNotiOpen(false);
    }, 200);

    setIsFadeIn(false);
  };

  useClickOutSide(notiRef, handleNotiOutside);

  return { notiRef, isNotiOpen, isFadeIn, handleNotiOpen };
};
