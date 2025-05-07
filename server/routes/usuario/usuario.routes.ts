const { Router } = require('express')
const {
    listarUsuarios,
    criarUsuario,
    obterUsuario,
    excluirUsuario
  } = require('./usuario.controller');
  
  const router = Router();
  
  router.get('/', listarUsuarios);
  router.post('/', criarUsuario);
  router.get('/:id', obterUsuario);
  router.delete('/:id', excluirUsuario);
  
  export default router;
