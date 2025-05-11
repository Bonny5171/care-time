export interface Agendamento {
  id?: number;
  usuario_id: number;
  exame_id: number;
  data_hora: string; // formato ISO
  observacoes?: string;
}
