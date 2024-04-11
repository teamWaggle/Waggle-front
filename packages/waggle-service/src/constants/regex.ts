export const REGEX = {
  NUM_REG: /[0-9]/,
  ENG_REG: /[a-zA-Z]/,
  // eslint-disable-next-line no-useless-escape
  SPECIAL_CHAR_REG: /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/,
  EXCEPT_SPECIAL: /^[a-zA-Z가-힣0-9\s\u3131-\uD79D]+$/,
};
