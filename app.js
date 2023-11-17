import express from 'express';
import cors from 'cors';
import {typeUserRouter} from "./src/Routers/typeUserRouter.js";

const app = express();
app.use(express.json());
app.use(cors);

app.use('/typesUser', typeUserRouter)
app.get('/', (req, res) => {
    console.log("router principal")
    res.send('hello world')
})

app.listen(8000, () => console.log('Server is running on port 8000'));
