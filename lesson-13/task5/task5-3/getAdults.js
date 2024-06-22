export const getAdults = obj => {

  const result = {}

  for (const key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key]
    }
  }
  return result
}