import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewAppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/agendamentos/agendamentos/1') // user_id pode vir do contexto
      .then(res => setAppointments(res.data))
      .catch(err => console.error('Erro ao buscar agendamentos:', err));
  }, []);

  return (
    <div>
      <h2>Meus Agendamentos</h2>
      <ul>
        {appointments.map((appt: any) => (
          <li key={appt.id}>
            <strong>Exame:</strong> {appt.exame_nome}<br />
            <strong>Data:</strong> {new Date(appt.data_hora).toLocaleString()}<br />
            <strong>Observações:</strong> {appt.observacoes}
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
