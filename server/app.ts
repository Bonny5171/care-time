import express from 'express';
import userRoutes from './routes/usuario/usuario.routes';
import exameRoutes from './routes/exames/exame.routes';
import agendamentoRoutes from './routes/agendamentos/agemdamento.routes';

const app = express()

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/exames', exameRoutes);
app.use('/api/agendamentos', agendamentoRoutes);

export default app;