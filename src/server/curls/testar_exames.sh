#!/bin/bash

echo "Criando exames..."

curl -X POST http://localhost:8080/api/exames \
  -H "Content-Type: application/json" \
  -d '{"nome": "Hemograma Completo", "especialidade": "Clínica Geral"}'

echo -e "\n---"

curl -X POST http://localhost:8080/api/exames \
  -H "Content-Type: application/json" \
  -d '{"nome": "Ressonância Magnética", "especialidade": "Neurologia"}'

echo -e "\n---"

curl -X POST http://localhost:8080/api/exames \
  -H "Content-Type: application/json" \
  -d '{"nome": "Raio-X de Tórax", "especialidade": "Pneumologia"}'

echo -e "\n---"

curl -X POST http://localhost:8080/api/exames \
  -H "Content-Type: application/json" \
  -d '{"nome": "Ultrassonografia Abdominal", "especialidade": "Gastroenterologia"}'

echo -e "\n---"

curl -X POST http://localhost:8080/api/exames \
  -H "Content-Type: application/json" \
  -d '{"nome": "Eletrocardiograma", "especialidade": "Cardiologia"}'

echo -e "\n Todos os exames foram criados."

echo -e "\n Listando todos os exames cadastrados:\n"

curl -X GET http://localhost:8080/api/exames

echo -e "\n Fim do teste."
