import { Request, Response } from 'express';
import { Agendamento } from './agendamento.model';
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
  //const agendamento = await db<Agendamento>('agendamentos').where({ id }).first();

  const agendamento = await db('agendamentos')
  .join('exames', 'agendamentos.exame_id', '=', 'exames.id')
  .select(
    'agendamentos.id',
    'agendamentos.data_hora',
    'agendamentos.observacoes',
    'exames.nome as exame_nome',
    'exames.especialidade'
  )
  .where('agendamentos.id', id)
  .first();

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

export const listarAgendamentosPorUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const agendamentos = await db('agendamentos')
      .join('exames', 'agendamentos.exame_id', '=', 'exames.id')
      .select(
        'agendamentos.id',
        'agendamentos.data_hora',
        'agendamentos.observacoes',
        'exames.nome as exame_nome',
        'exames.especialidade'
      )
      .where('agendamentos.usuario_id', id);

    if (agendamentos.length === 0) {
      return res.status(404).json({ mensagem: 'Nenhum agendamento encontrado para este usuário.' });
    }

    res.status(200).json(agendamentos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar agendamentos do usuário.' });
  }
};