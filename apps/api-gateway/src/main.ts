/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import proxy  from 'express-http-proxy';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import axios from 'axios';
import { urlencoded } from 'body-parser';


const app = express();
app.use(cors({
origin:["http://localhost:3000"],
allowedHeaders:[ "Authorization","Content-Type"],
credentials:true,

}))
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use("/",proxy("http://localhost:6001"));

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to api-gateway!' });
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
