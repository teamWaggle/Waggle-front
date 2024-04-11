export const convertToUTC = (inputDate: Date) => {
  const date = inputDate.toISOString().split("T")[0];
  const time = inputDate.toISOString().split("T")[1];

  return {
    date,
    time,
  };
};
