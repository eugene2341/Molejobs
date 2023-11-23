const express = require('express');
const app = express(); // sets up server with al features and utilities provided by express
const port = 3012;

// when get req made, res back hello world
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});
