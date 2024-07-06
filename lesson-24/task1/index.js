
export const dayOfWeek = (date, days) => {
  const weekDays = ["Su", "Mo", "Thu", "We", "Th", "Fr", "St",];
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
};

