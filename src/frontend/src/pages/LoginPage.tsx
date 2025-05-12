import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [nome, setNome] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (nome.trim() === '') return alert('Por favor, insira seu nome.');

    try {
      // Verifica se o usuário existe no banco
      const response = await fetch(`${process.env.REACT_APP_API}/api/users/usuarios/email/${nome}`);
      const data = await response.json();

      let user;
      if (response.status === 200 && data) {
        // Se o usuário já existir, recupera os dados
        user = {
            nome: data[0].email,
            id: data[0].id,
        };
      } else {
        // Se o usuário não existir, cria um novo usuário
        const createResponse = await fetch(`${process.env.REACT_APP_API}/api/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
                "nome": "SEM NOME",
                "email": nome,
                "telefone": ""
            }),
        });

        const newUser = await createResponse.json();
        user =  {
            nome: newUser.email,
            id: newUser.id,
        };
      }

      // Armazena o usuário no contexto
      setUser(user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao buscar ou criar o usuário:", error);
      alert("Ocorreu um erro, tente novamente.");
    }
  };

  return (
    <div>
      <h2>Identifique-se para continuar</h2>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default LoginPage;
