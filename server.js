const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.static('../public'));
app.use(express.static('./views'));
app.use(express.static('../views'));

app.get('/', (req, res) => res.render('index.html'))

const server = app.listen(process.env.PORT || 3000, function() {
  const port = server.address().port;
    console.log("Bruce is listening on port " + port);
});

module.exports = server;
