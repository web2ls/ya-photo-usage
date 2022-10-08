const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server is here');
});

app.listen(8000, () => {
  console.log('Server has been started');
});

