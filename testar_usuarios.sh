echo "Criando usuarios..."

curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "telefone": "11999999999"
}'

curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"nome": "Ana Paula", "email": "ana.paula@example.com", "telefone": "11988887777"}'

curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"nome": "Bruno Silva", "email": "bruno.silva@example.com", "telefone": "11977776666"}'

curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"nome": "Carla Mendes", "email": "carla.mendes@example.com", "telefone": "11966665555"}'

curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"nome": "Diego Rocha", "email": "diego.rocha@example.com", "telefone": "11955554444"}'

curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"nome": "Elaine Souza", "email": "elaine.souza@example.com", "telefone": "11944443333"}'

echo "Criando TODOS usuarios..."
curl -X GET http://localhost:8080/api/users

echo "Obtendo usuario do ID = 1..."
curl -X GET http://localhost:8080/api/users/1

echo "Deletando usuario do ID = 1..."
curl -X DELETE http://localhost:3000/usuarios/1


