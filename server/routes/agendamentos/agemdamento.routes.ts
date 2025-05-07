const { Router } = require('express')
const { 
    listarAgendamentos,
    obterAgendamento,
    criarAgendamento,
    excluirAgendamento
 } = require('./agemdamento.controller');

const router = Router();

router.get('/', listarAgendamentos);
router.get('/:id', obterAgendamento);
router.post('/', criarAgendamento);
router.delete('/:id', excluirAgendamento);

export default router;