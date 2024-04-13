const cors_proxy = require('cors-anywhere');

// Configure CORS Anywhere
cors_proxy.createServer({
  originWhitelist: [], // Allow all origins (you can specify specific origins if needed)
  requireHeader: ['origin', 'x-requested-with'], // Headers required for proxying
  removeHeaders: ['cookie', 'cookie2'], // Remove specific headers
}).listen(8080, '0.0.0.0', () => {
  console.log('CORS Anywhere is running on port 8080');
});