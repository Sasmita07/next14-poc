import 'server-only';

export const serverComponents = () => {
  console.log('Called only during server events');
  return 'Hello Server';
};
