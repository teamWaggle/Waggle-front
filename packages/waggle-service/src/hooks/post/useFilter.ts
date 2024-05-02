import { useState } from "react";

import { FILTER_DEFAULT } from "@/constants/filter";

export const useFilter = () => {
  const [filterOption, setFilterOption] = useState(FILTER_DEFAULT.OPTION);
  const [filterText, setFilterText] = useState(FILTER_DEFAULT.TEXT);

  const handleFilterOption = (option: string) => {
    setFilterOption(option);
  };

  const handleFilterText = (text: string) => {
    setFilterText(text);
  };

  return { filterOption, filterText, handleFilterOption, handleFilterText };
};
