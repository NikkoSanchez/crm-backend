import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/CRMRoutes';

const app = express();
const PORT = '3000';

// mongoose connection
mongoose.connect('mongodb://localhost:27017/CRMdb', {
  useNewUrlParser: true
})

// bodyparser setup
app.use(bodyParser.urlencoded({  extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express servers running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))