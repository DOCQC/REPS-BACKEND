import express from 'express';
import cors from 'cors';
import { userTypeRouter } from "./src/routers/userTypeRouter.js";
import { errorHandler } from "./src/middlewares/exceptions/errorHandler.js";
import { userRouter } from "./src/routers/userRouter.js";
import { questRouter } from './src/routers/questRouter.js';
import { areaOfExpertiseRouter } from './src/routers/areaOfExpertiseRouter.js';
import { enterpriseRouter } from './src/routers/enterpriseRouter.js';

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use('/userTypes', userTypeRouter)
app.use('/users', userRouter)
app.use('/quests', questRouter)
app.use('/areas-of-expertise', areaOfExpertiseRouter)
app.use('/enterprises', enterpriseRouter)
app.use(errorHandler)

const port = 8000
app.listen(port, () => console.log(`Server is running on port: ${port}`));
