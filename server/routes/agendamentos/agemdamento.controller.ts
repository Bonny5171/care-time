import { Request, Response } from 'express';
import { Agendamento } from './agemdamento.model';
import db from '../../database/knex';

export const listarAgendamentos = async (req: Request, res: Response) => {
  const agendamentos = await db('agendamentos')
    .join('usuarios', 'agendamentos.usuario_id', 'usuarios.id')
    .join('exames', 'agendamentos.exame_id', 'exames.id')
    .select(
      'agendamentos.*',
      'usuarios.nome as usuario_nome',
      'exames.nome as exame_nome',
      'exames.especialidade as exame_especialidade'
    )
    .orderBy('data_hora');
  res.json(agendamentos);
};

export const obterAgendamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const agendamento = await db<Agendamento>('agendamentos').where({ id }).first();
  if (!agendamento) return res.status(404).json({ mensagem: 'Não encontrado' });
  res.json(agendamento);
};

export const criarAgendamento = async (req: Request, res: Response) => {
  const { usuario_id, exame_id, data_hora, observacoes } = req.body;
  const [agendamento] = await db<Agendamento>('agendamentos')
    .insert({ usuario_id, exame_id, data_hora, observacoes })
    .returning('*');
  res.status(201).json(agendamento);
};

export const excluirAgendamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const count = await db('agendamentos').where({ id }).del();
  if (!count) return res.status(404).json({ mensagem: 'Não encontrado' });
  res.json({ mensagem: 'Agendamento cancelado com sucesso' });
};


