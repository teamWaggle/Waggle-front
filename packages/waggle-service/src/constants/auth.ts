import {
  hasEngInPassword,
  hasNumInPassword,
  hasSpecialCharInPassword,
  checkLengthInPassword,
} from "@/utils/validator";

export const passwordCheckData = [
  {
    validator: hasEngInPassword,
    text: "영문",
  },
  {
    validator: hasNumInPassword,
    text: "숫자",
  },
  {
    validator: hasSpecialCharInPassword,
    text: "특수문자",
  },
  {
    validator: checkLengthInPassword,
    text: "8자리 이상",
  },
];

export const passwordFormData = [
  {
    id: "password",
    text: "비밀번호",
  },
  {
    id: "passwordCheck",
    text: "비밀번호 확인",
  },
];

export const yearData = [
  {
    selectText: 2014,
  },
  {
    selectText: 2013,
  },
  {
    selectText: 2012,
  },
  {
    selectText: 2011,
  },
  {
    selectText: 2010,
  },
  {
    selectText: 2009,
  },
  {
    selectText: 2008,
  },
  {
    selectText: 2007,
  },
  {
    selectText: 2006,
  },
  {
    selectText: 2005,
  },
  {
    selectText: 2004,
  },
  {
    selectText: 2003,
  },
  {
    selectText: 2002,
  },
  {
    selectText: 2001,
  },
  {
    selectText: 2000,
  },
  {
    selectText: 1999,
  },
  {
    selectText: 1998,
  },
  {
    selectText: 1997,
  },
  {
    selectText: 1996,
  },
  {
    selectText: 1995,
  },
  {
    selectText: 1994,
  },
  {
    selectText: 1993,
  },
  {
    selectText: 1992,
  },
  {
    selectText: 1991,
  },
  {
    selectText: 1990,
  },
  {
    selectText: 1989,
  },
  {
    selectText: 1988,
  },
  {
    selectText: 1987,
  },
  {
    selectText: 1986,
  },
  {
    selectText: 1985,
  },
  {
    selectText: 1984,
  },
  {
    selectText: 1983,
  },
  {
    selectText: 1982,
  },
  {
    selectText: 1981,
  },
  {
    selectText: 1980,
  },
  {
    selectText: 1979,
  },
  {
    selectText: 1978,
  },
  {
    selectText: 1977,
  },
  {
    selectText: 1976,
  },
  {
    selectText: 1975,
  },
  {
    selectText: 1974,
  },
  {
    selectText: 1973,
  },
  {
    selectText: 1972,
  },
  {
    selectText: 1971,
  },
  {
    selectText: 1970,
  },
];

export const monthData = [
  {
    selectText: 1,
  },
  {
    selectText: 2,
  },
  {
    selectText: 3,
  },
  {
    selectText: 4,
  },
  {
    selectText: 5,
  },
  {
    selectText: 6,
  },
  {
    selectText: 7,
  },
  {
    selectText: 8,
  },
  {
    selectText: 9,
  },
  {
    selectText: 10,
  },
  {
    selectText: 11,
  },
  {
    selectText: 12,
  },
];

export const dayData = [
  { selectText: 1 },
  { selectText: 2 },
  { selectText: 3 },
  { selectText: 4 },
  { selectText: 5 },
  { selectText: 6 },
  { selectText: 7 },
  { selectText: 8 },
  { selectText: 9 },
  { selectText: 10 },
  { selectText: 11 },
  { selectText: 12 },
  { selectText: 13 },
  { selectText: 14 },
  { selectText: 15 },
  { selectText: 16 },
  { selectText: 17 },
  { selectText: 18 },
  { selectText: 19 },
  { selectText: 20 },
  { selectText: 21 },
  { selectText: 22 },
  { selectText: 23 },
  { selectText: 24 },
  { selectText: 25 },
  { selectText: 26 },
  { selectText: 27 },
  { selectText: 28 },
  { selectText: 29 },
  { selectText: 30 },
  { selectText: 31 },
];
