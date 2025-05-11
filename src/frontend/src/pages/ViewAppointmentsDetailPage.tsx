import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const AppointmentDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [appointment, setAppointment] = useState<any>(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/api/agendamentos/${id}`)
      .then(res => setAppointment(res.data))
      .catch(err => console.error('Erro ao buscar agendamento:', err));
  }, [id]);

  if (!appointment) return <p>Carregando agendamento...</p>;

  return (
    <div>
      <h2>Detalhes do Agendamento</h2>
      <p><strong>Exame:</strong> {appointment.exame_nome}</p>
      <p><strong>Data:</strong> {new Date(appointment.data_hora).toLocaleString()}</p>
      <p><strong>Observações:</strong> {appointment.observacoes || 'Nenhuma'}</p>

      <Link to="/agendamentos">Voltar</Link>
    </div>
  );
};

export default AppointmentDetailPage;
