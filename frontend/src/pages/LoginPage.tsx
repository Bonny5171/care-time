// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [nome, setNome] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aqui você pode fazer uma validação de nome ou id
    if (nome.trim() === '') return alert('Por favor, insira seu nome.');

    // Criar um usuário fictício com id incremental
    const user = {
      id: Date.now(),  // Apenas para fins de exemplo, você pode usar um ID real aqui
      nome,
    };

    setUser(user);  // Armazenando o usuário no contexto
    navigate("/dashboard");
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
