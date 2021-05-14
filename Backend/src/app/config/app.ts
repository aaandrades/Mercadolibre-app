import express from 'express'
import setupMiddlewares from './middlewares';
import { routerLink } from '../routes/routes';

const app = express();
setupMiddlewares(app);
routerLink(app);

export default app