export const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);
  if (clientIndex === -1) {
    return -1;
  }
  if (balances[clientIndex] < amount) {
    return -1;
  }


  return balances[clientIndex] -= amount;
};