const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

const server = app.listen(process.env.PORT || 3000, function() {
  const port = server.address().port;
    console.log("Bruce is listening on port " + port);
});

module.exports = server;
