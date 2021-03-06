/* eslint-disable no-console */
const app = require('./lib/app');
const http = require('http');
require('./lib/connect');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});