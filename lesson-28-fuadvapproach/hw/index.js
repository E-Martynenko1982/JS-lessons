export const shmoment = initialDate => {
  let date = new Date(initialDate);

  const addTime = (unit, value) => {
    switch (unit) {
      case 'years':
        date.setFullYear(date.getFullYear() + value);
        break;
      case 'months':
        date.setMonth(date.getMonth() + value);
        break;
      case 'days':
        date.setDate(date.getDate() + value);
        break;
      case 'hours':
        date.setHours(date.getHours() + value);
        break;
      case 'minutes':
        date.setMinutes(date.getMinutes() + value);
        break;
      case 'seconds':
        date.setSeconds(date.getSeconds() + value);
        break;
      case 'milliseconds':
        date.setMilliseconds(date.getMilliseconds() + value);
        break;
      default:
        throw new Error(`Unknown unit: ${unit}`);
    }
  };

  return {
    add(unit, value) {
      addTime(unit, value);
      return this;
    },
    subtract(unit, value) {
      addTime(unit, -value);
      return this;
    },
    result() {
      return new Date(date);
    }
  };
};
