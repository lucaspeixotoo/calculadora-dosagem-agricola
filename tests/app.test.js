const request = require("supertest");
const app = require("../src/app");

describe("POST /calculos", () => {
  test("retorna 201 e o cálculo correto para dados válidos", async () => {
    const resposta = await request(app)
      .post("/calculos")
      .send({ areaHectares: 10, doseRecomendadaPorHectare: 5 });

    expect(resposta.status).toBe(201);
    expect(resposta.body.dosagemTotal).toBe(50);
  });

  test("retorna 400 quando a área é inválida", async () => {
    const resposta = await request(app)
      .post("/calculos")
      .send({ areaHectares: -1, doseRecomendadaPorHectare: 5 });

    expect(resposta.status).toBe(400);
    expect(resposta.body.erro).toBeDefined();
  });
});

describe("GET /calculos", () => {
  test("retorna 200 e uma lista", async () => {
    const resposta = await request(app).get("/calculos");

    expect(resposta.status).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });
});