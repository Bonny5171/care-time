import { Request, Response } from 'express';
import { Usuario } from './usuario.model';

let usuarios: Usuario[] = [];

export const listarUsuarios = (req: Request, res: Response) => {
  res.json(usuarios);
};

export const criarUsuario = (req: Request, res: Response) => {
  //TO-DO: A fazer
  res.status(201).json([]);
};

export const obterUsuario = (req: Request, res: Response) => {
  //TO-DO: A fazer
  res.json([]);
};

export const excluirUsuario = (req: Request, res: Response) => {
  //TO-DO: A fazer
  res.status(204).send();
};
