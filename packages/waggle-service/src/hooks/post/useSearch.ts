import { useState } from "react";

export const useSearch = () => {
  const [keyword, setKeyword] = useState("");

  const handleChangeInput = (value: string) => {
    setKeyword(value);
  };

  return { keyword, handleChangeInput };
};
