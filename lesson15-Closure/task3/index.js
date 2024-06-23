


const createLogger = () => {
  let messages = [];


  const warn = (str) => {
    messages.push({
      message: str,
      type: 'warn',
      dateTime: new Date(),
    });

  }

  const error = (str) => {
    messages.push({
      message: str,
      type: 'error',
      dateTime: new Date(),
    });
  };

  const log = (str) => {
    messages.push({
      message: str,
      type: 'log',
      dateTime: new Date(),
    });
  };

  const getRecords = (type = null) => {
    const filteredMessages = type ? messages.filter(msg => msg.type === type) : messages;
    return filteredMessages.sort((a, b) => b.dateTime - a.dateTime);
  };


  return {
    warn,
    error,
    log,
    getRecords,
  }
};

const logger1 = createLogger();


logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords('log'))



