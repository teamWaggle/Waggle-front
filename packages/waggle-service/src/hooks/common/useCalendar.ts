import { useState } from "react";

import { addMonths, subMonths } from "date-fns";

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const editSelectedStartDate = (date: Date) => {
    setSelectedStartDate(date);
  };

  const editSelectedEndDate = (date: Date) => {
    setSelectedEndDate(date);
  };

  const handlePrevDate = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextDate = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const editCurrentDate = (date: Date) => {
    setCurrentDate(date);
  };

  return {
    currentDate,
    editCurrentDate,
    selectedStartDate,
    selectedEndDate,
    handlePrevDate,
    handleNextDate,
    editSelectedStartDate,
    editSelectedEndDate,
  };
};
export default useCalendar;
