export const getLocalStorageData = () => {
  Object.entries(localStorage)
    .reduce((acc, [key, value]) => {
      let newValue;
      try {
        newValue = JSON.parse(value)
      } catch (error) {
        newValue = value;
      }
      return {
        ...acc,
        [key]: newValue,
      }
    }, {})
};
