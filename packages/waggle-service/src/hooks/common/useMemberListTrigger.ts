import { useState, useRef } from "react";

import useClickOutSide from "@/hooks/common/useClickOutSide";

export const useMemberListTrigger = () => {
  const [isMemberListOpen, setIsMemberListOpen] = useState(false);

  const memberListRef = useRef<HTMLDivElement>(null);

  useClickOutSide(memberListRef, () => setIsMemberListOpen(false));

  const handleMemberListClose = () => {
    setIsMemberListOpen(false);
  };

  const handleMemberList = () => {
    setIsMemberListOpen((prev) => !prev);
  };

  return { isMemberListOpen, handleMemberList, handleMemberListClose, memberListRef };
};
