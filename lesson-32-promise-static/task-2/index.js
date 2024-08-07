const servers = [
  'https://server.com/us/',
  'https://server.com/eu/',
  'https://server.com/au/',
]

const getRandomNumber = (from, to) => {
  from = Math.random() * (to - from)
}
const request = url => new Promise((resolve,) => {
  const randomTime = getRandomNumber(1000, 3000)
  setTimeout(() => resolve({
    userData: {
      name: 'Tom',
      age: 17,
    },
    source: url,
  }), randomTime);
});

export const getUserASAP = userId => {
  const userUrls = servers
    .map(serverUrl => `${serverUrl}/${userId}`);

  const requests = userUrls
    .map(url => request(url))

  return Promise.race(requests)
};

