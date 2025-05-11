echo "Cria agendamento..."

curl -X POST http://localhost:8080/api/agendamentos \
  -H "Content-Type: application/json" \
  -d '{
    "usuario_id": 1,
    "exame_id": 2,
    "data_hora": "2025-05-10T14:30:00",
    "observacoes": "Paciente com jejum"
  }'

echo "Lista agendamentos..."
curl http://localhost:8080/api/agendamentos

echo "Busca agendamento por ID..."
curl http://localhost:8080/api/agendamentos/1

echo "Exclui agendamento por ID..."
curl curl -X DELETE http://localhost:8080/api/agendamentos/1