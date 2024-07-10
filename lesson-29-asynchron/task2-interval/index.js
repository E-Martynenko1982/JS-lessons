const pinger = (num, period) => {
  const interval = setInterval(() => {
    console.log('Ping')

  }, period)

  setTimeout(() => {
    clearInterval(interval)
  }, num * period)
};

pinger(5, 1000)