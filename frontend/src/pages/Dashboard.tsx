// src/pages/Dashboard.tsx
import React from 'react';
import { useUser } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    if (!user) {
        return <div>Você precisa estar logado para acessar essa página.</div>;
    }

    const handleLogout = () => {
        navigate('/');  // Redireciona para a página de login
    };

    return (
        <div>
            <h2>Bem-vindo, {user.nome}!</h2>
            <div>
                <Link to="/agendamentos">Ver Agendamentos</Link>
            </div>
            <div>
                <Link to="/agendar-exame">Agendar Exame</Link>
            </div>
            <br>
            </br>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
