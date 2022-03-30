// 3rd party modules imports
import express from 'express';
import bodyParser from 'body-parser';

// user imports
import router from './routes/postRoutes';

// 3rd party dependencies configuration
const app = express();
app.use(bodyParser.json());

// user routes configuration
app.use(router);

// server start
app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});
