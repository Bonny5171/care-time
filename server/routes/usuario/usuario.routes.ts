const { Router } = require('express')
const {
    listarUsuarios,
    criarUsuario,
    obterUsuario,
    excluirUsuario,
    obterUsuarioPorEmail
  } = require('./usuario.controller');
  
  const router = Router();
  
  router.get('/', listarUsuarios);
  router.post('/', criarUsuario);
  router.get('/:id', obterUsuario);
  router.delete('/:id', excluirUsuario);
  router.get('/usuarios/email/:email', obterUsuarioPorEmail);
  
  export default router;
