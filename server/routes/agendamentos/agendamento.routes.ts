const { Router } = require('express')
const { 
    listarAgendamentos,
    obterAgendamento,
    criarAgendamento,
    excluirAgendamento,
    listarAgendamentosPorUsuario
 } = require('./agendamento.controller');

const router = Router();

router.get('/', listarAgendamentos);
router.get('/:id', obterAgendamento);
router.post('/', criarAgendamento);
router.delete('/:id', excluirAgendamento);
router.get('/agendamentos/:id', listarAgendamentosPorUsuario);

export default router;