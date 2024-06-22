export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null
  }

  const minAbsValue = arr.reduce((min, current) =>
    Math.abs(current) < Math.abs(min) ? current : min
  );

  return minAbsValue ** 2;
}


