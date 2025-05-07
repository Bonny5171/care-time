import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const ViewAppointmentsPage = () => {
  type Appointment = {
    id: number;
    exame_nome: string;
    data_hora: string;
  };
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/agendamentos/agendamentos/${user?.id}`)
      .then(res => setAppointments(res.data))
      .catch(err => console.error('Erro ao buscar agendamentos:', err));
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const handleDetalhar = (id: number) => {
    navigate(`/appointments/${id}`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este agendamento?")) {
      try {
        await axios.delete(`http://localhost:8080/api/agendamentos/${id}`);
        setAppointments(prev => prev.filter(appt => appt?.id !== id));
      } catch (error) {
        console.error('Erro ao excluir agendamento:', error);
        alert('Não foi possível excluir o agendamento.');
      }
    }
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

  if (appointments.length === 0) {
    return (
      <div>
        <h2>Meus Agendamentos</h2>
        <p>Você não tem agendamento</p>
        
        <Link to="/dashboard">Voltar Dashboard</Link>
      </div>
    ); 
  }

  return (
    <div>
      <h2>Meus Agendamentos</h2>
      <ul>
        {appointments.map((appt: any) => (
          <li key={appt.id} style={{paddingBottom: 15}}>
              <strong>Exame:</strong> {appt.exame_nome}<br />
              <strong>Data:</strong> {new Date(appt.data_hora).toLocaleString()}<br />
              <button onClick={() => handleDetalhar(appt.id)} style={{ color: 'blue' }}>
                Detalhar
              </button>
              <button onClick={() => handleDelete(appt.id)} style={{ color: 'red' }}>
                Excluir
              </button>
          </li>
        ))}
      </ul>
      <br>
      </br>
      <Link to="/dashboard">Voltar Dashboard</Link>
    </div>
  );
};

export default ViewAppointmentsPage;
