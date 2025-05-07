import { Request, Response } from 'express';
import { Exame } from './exame.model';
import db from '../../database/knex';

export const listarExames = async (req: Request, res: Response) => {
  try {
    const exames = await db<Exame>('exames').select();
    res.json(exames);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar exames.' });
  }
};

export const criarExame = async (req: Request, res: Response) => {
  const { nome, especialidade } = req.body;
  if (!nome || !especialidade) return res.status(400).json({ error: 'Campos obrigatórios.' });

  try {
    const [id] = await db<Exame>('exames').insert({ nome, especialidade }).returning('id');
    res.status(201).json({ id, nome, especialidade });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar exame.' });
  }
};

