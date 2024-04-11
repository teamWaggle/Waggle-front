import { useState } from "react";

const useModalTrigger = () => {
  const [isTrigger, setIsTrigger] = useState(false);

  const handleTriggerOnClick = () => {
    setIsTrigger((prev) => !prev);
  };

  const modalClose = () => {
    setIsTrigger(false);
  };
  return { isTrigger, handleTriggerOnClick, modalClose };
};

export default useModalTrigger;
