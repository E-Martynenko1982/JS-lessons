const weekDays = ['Sun', "Mon", "Thu", "Wed",]
const getDayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
};

const result = getDayOfWeek(new Date(2019, 0, 1), 14);

console.log(result);


// ----------------------------------

const formatter = new Intl.DateTimeFormat("en", {
  timeZone: "UTC",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,

})

const getTime = date => formatter.format(date);

console.log(getTime(new Date()));
