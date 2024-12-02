import express from 'express';
const app = express();

import usersRouter from './routers/usersRouter.js';
app.use( usersRouter);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});