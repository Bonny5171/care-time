import { Request, Response } from 'express';
import { Usuario } from './usuario.model';
import db from '../../database/knex';

let usuarios: Usuario[] = [];

export const criarUsuario = async (req: Request, res: Response) => {
  try {
    const { nome, email, telefone } = req.body;
    const [usuario] = await db('usuarios')
      .insert({ nome, email, telefone })
      .returning('*'); // PostgreSQL específico

    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

export const listarUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await db('usuarios').select('*');
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

export const obterUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuario = await db('usuarios').where({ id }).first();
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao buscar usuário.', erro: error });
  }
};

export const excluirUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const linhasAfetadas = await db('usuarios').where({ id }).del();
    if (linhasAfetadas === 0) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    return res.status(200).json({ mensagem: 'Usuário excluído com sucesso.' });
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao excluir usuário.', erro: error });
  }
};

export const obterUsuarioPorEmail = async (req: Request, res: Response) => {
  const { email } = req.params;  // Obtém o e-mail dos parâmetros da URL
  
  try {
    const usuarios = await db('usuarios')
      .select(
        'id',
        'email'
      )
      .where('email', email);

    if (usuarios.length === 0) {
      return res.status(404).json({ mensagem: 'Nenhum usuario encontrado para este email.' });
    }

    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar agendamentos do usuário.' });
  }
};