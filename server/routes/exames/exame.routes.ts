const { Router } = require('express')
const { listarExames, criarExame } = require('./exame.controller');

const router = Router();

router.get('/', listarExames);
router.post('/', criarExame);

export default router;