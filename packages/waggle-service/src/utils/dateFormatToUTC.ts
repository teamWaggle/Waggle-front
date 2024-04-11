export const dateFormatToUTC = (
  year: string | undefined,
  month: string | undefined,
  day: string | undefined
) => {
  let formatMonth = month;
  let formatDay = day;

  if (Number(month) < 10) {
    formatMonth = `0${month}`;
  }

  if (Number(day) < 10) {
    formatDay = `0${day}`;
  }

  return `${year}-${formatMonth}-${formatDay}`;
};
