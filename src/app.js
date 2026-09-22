const express = require("express");
const { calcularDosagemTotal } = require("./calculoDosagem");

const app = express();
app.use(express.json());

const historico = [];

app.post("/calculos", (req, res) => {
  const { areaHectares, doseRecomendadaPorHectare } = req.body;

  try {
    const dosagemTotal = calcularDosagemTotal(areaHectares, doseRecomendadaPorHectare);
    const registro = { areaHectares, doseRecomendadaPorHectare, dosagemTotal };
    historico.push(registro);
    res.status(201).json(registro);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
});

app.get("/calculos", (req, res) => {
  res.status(200).json(historico);
});

app.get("/calculos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const registro = historico[id];

  if (!registro) {
    return res.status(404).json({ erro: "Cálculo não encontrado" });
  }

  res.status(200).json(registro);
});

module.exports = app;