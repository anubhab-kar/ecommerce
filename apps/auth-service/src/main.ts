import express from 'express';
import cookieParser from 'cookie-parser';
import { urlencoded } from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();



const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 6001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:8080"],
    allowedHeaders: ["Authorization", "Content-Type"],
    credentials: true,
}))



app.use()
app.get('/', (req, res) => {
    res.send({ 'message': 'Hello API'});
});

app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
});
