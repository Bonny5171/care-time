import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ScheduleExamPage = () => {
  const [exams, setExams] = useState([]);
  const [selectedExamId, setSelectedExamId] = useState('');
  const [datetime, setDatetime] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/exames')
      .then(response => setExams(response.data))
      .catch(error => console.error('Erro ao carregar exames:', error));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/agendamentos', {
        exame_id: selectedExamId,
        data_hora: datetime,
        observacoes: notes,
        usuario_id: 1 // simulado, pode vir do contexto
      });

      alert('Agendamento realizado com sucesso!');
      setDatetime('');
      setNotes('');
    } catch (err) {
      alert('Erro ao agendar exame. Preencha todos os campos corretamente e tente novamente.');
    }
  };

  return (
    <div>
      <h2>Agendar Exame</h2>
      <form onSubmit={handleSubmit}>
        <label>Exame:</label>
        <select value={selectedExamId} onChange={e => setSelectedExamId(e.target.value)}>
          <option value="">Selecione um exame</option>
          {exams.map((exam: any) => (
            <option key={exam.id} value={exam.id}>{exam.nome}</option>
          ))}
        </select>

        <br />

        <label>Data e Hora:</label>
        <input type="datetime-local" value={datetime} onChange={e => setDatetime(e.target.value)} />

        <br />

        <label>Observações:</label>
        <textarea value={notes} onChange={e => setNotes(e.target.value)} />

        <br />

        <button type="submit">Agendar</button>
      </form>
      <br>
      </br>
      <Link to="/dashboard">Voltar Dashboard</Link>
    </div>
  );
};

export default ScheduleExamPage;
