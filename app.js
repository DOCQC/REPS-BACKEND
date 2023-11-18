import express from 'express';
import cors from 'cors';
import { userTypeRouter } from "./src/routers/userTypeRouter.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use('/userTypes', userTypeRouter)
app.get('/', (req, res) => {
    res.send('REPS')
})

const port = 8000
app.listen(port, () => console.log(`Server is running on port: ${port}`));
