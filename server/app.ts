import express from 'express';
import userRoutes from './routes/usuario/usuario.routes';
import exameRoutes from './routes/exames/exame.routes';

const app = express()

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/exames', exameRoutes);

export default app;