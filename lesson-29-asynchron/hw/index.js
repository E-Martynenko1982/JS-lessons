export const delay = (delay, callback, context, ...args) => {
  window.setTimeout(() => {
    callback.apply(context, args);
  }, delay);
};

