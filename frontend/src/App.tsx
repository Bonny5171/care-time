import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ScheduleExamPage from './pages/ScheduleExamPage';
import ViewAppointmentsPage from './pages/ViewAppointmentsPage';
import ViewAppointmentsDetailPage from './pages/ViewAppointmentsDetailPage';

import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agendar-exame" element={<ScheduleExamPage />} />
          <Route path="/agendamentos" element={<ViewAppointmentsPage />} />
          <Route path="/appointments/:id" element={<ViewAppointmentsDetailPage />} />
          {/* Outras rotas... */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
