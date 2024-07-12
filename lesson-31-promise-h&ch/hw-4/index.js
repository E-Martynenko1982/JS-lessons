export const delay = timer => {
  return new Promise((resolve) => {
setTimeout(() => {
  resolve()
}, timer);
  })
    
  }

delay(3000).then(() => console.log('Done'))