export default handleRequest = (requestFunction, options = {}) => {
  console.log('Request started...');

  return requestFunction()
    .then((response) => {
      console.log('Request successful:', response.status);

      if (options.logSuccess) {
        console.log('Request succeeded');
      }

      return response;
    })
    .catch((error) => {
      console.error('Request failed:', error.message);

      if (options.throwOnError) {
        throw new Error('Custom error message');
      }

      throw error;
    });
};
