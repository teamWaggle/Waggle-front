import { REGEX } from "@/constants/regex";

export const validateAllClear = (password: string) => {
  return (
    hasEngInPassword(password) &&
    hasNumInPassword(password) &&
    hasSpecialCharInPassword(password) &&
    checkLengthInPassword(password)
  );
};

export const hasEngInPassword = (password: string) => {
  return REGEX.ENG_REG.test(password);
};

export const hasNumInPassword = (password: string) => {
  return REGEX.NUM_REG.test(password);
};

export const hasSpecialCharInPassword = (password: string) => {
  return REGEX.SPECIAL_CHAR_REG.test(password);
};

export const checkLengthInPassword = (password: string) => {
  return password.length > 8 && password.length < 20;
};
