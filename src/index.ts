import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import UserController from './controllers/UserController';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.get('/api/users', new UserController().List);

async function main() {
  await mongoose.connect(process.env.DB_CONN_STRING!, {
    dbName: process.env.DB_NAME!
  });

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

main().catch((err) => console.log(err));