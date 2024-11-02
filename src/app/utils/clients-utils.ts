import 'client-only';

export const clientComponents = () => {
  console.log('Called only during client i.e, browser events');
  return 'Hello Broswer';
};
