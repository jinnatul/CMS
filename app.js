import express from 'express';
import morgan from 'morgan';
import globalErrorHandler from './src/controllers/errorController';
import routers from './src/routers/router';
import AppError from './utils/AppError';

const app = express();

// parse application/json
app.use(express.json());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// application endpoints
app.use('/api/v1', routers);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
