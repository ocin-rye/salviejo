const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Working Now!');
});

app.listen(5000);
