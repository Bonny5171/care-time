import { useUser } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useUser();

    const handleLogout = () => {
        navigate('/');
    };

    if (!user) {
        return (
            <p>
                <div>Você precisa estar logado para acessar essa página.</div>
                <br></br>
                <button onClick={handleLogout}>Logout</button>
            </p>
        );
    }

    return (
        <div>
            <h2>Bem-vindo, {user.nome}!</h2>
            <div style={{paddingBottom: 5}}>
                <Link to="/agendamentos">Meus Agendamentos</Link>
            </div>
            <div style={{paddingBottom: 5}}>
                <Link to="/agendar-exame">Agendar Novo Exame</Link>
            </div>
            <br>
            </br>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
