# Calculadora de Dosagem Agrícola (API)

API REST em Node.js e Express que calcula a **dosagem total** de um insumo a partir da área cultivada e da dose recomendada por hectare.

> Status: em desenvolvimento. O histórico de cálculos é guardado **em memória** (zera ao reiniciar o servidor).

## Como funciona

```
dosagemTotal = areaHectares × doseRecomendadaPorHectare
```

Entradas devem ser números positivos. Valores inválidos (texto, zero ou negativo) retornam erro `400`.

## Tecnologias

- Node.js e Express
- Jest e Supertest (testes automatizados)
- GitHub Actions (integração contínua: roda os testes a cada push e pull request na `main`)

## Como rodar

Requisitos: Node.js 20 ou superior.

```bash
git clone https://github.com/lucaspeixotoo/calculadora-dosagem-agricola.git
cd calculadora-dosagem-agricola
npm install
node src/server.js
```

O servidor sobe em `http://localhost:3000`.

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/calculos` | Calcula e registra uma dosagem |
| GET | `/calculos` | Lista o histórico de cálculos |
| GET | `/calculos/:id` | Busca um cálculo pela posição no histórico (começa em 0) |

### Exemplo

```bash
curl -X POST http://localhost:3000/calculos \
  -H "Content-Type: application/json" \
  -d '{"areaHectares": 10, "doseRecomendadaPorHectare": 5}'
```

Resposta (`201`):

```json
{ "areaHectares": 10, "doseRecomendadaPorHectare": 5, "dosagemTotal": 50 }
```

Entrada inválida (`400`):

```json
{ "erro": "A área e dose informada devem ser valores positivos." }
```

Cálculo inexistente em `GET /calculos/99` retorna `404`.

## Testes

```bash
npm test
```

São 10 testes: regra de cálculo (valores válidos, negativos, zero e texto) e rotas da API (`201`, `400`, `200` e `404`).

## Estrutura

```
src/
  calculoDosagem.js   regra de negócio
  app.js              rotas Express
  server.js           inicialização do servidor
tests/
  calculoDosagem.test.js
  app.test.js
.github/workflows/ci.yml
```

## Próximos passos

- Persistir o histórico em banco de dados (SQL)
- Cobrir mais unidades de medida

(teste para recusa)