import { createContext } from "react";

export const ScheduleModalContext = createContext({
  isOpenModal: false,
  closeModal: () => {},
});
