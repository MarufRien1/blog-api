/* eslint-disable no-console */
// 3rd party modules
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});
