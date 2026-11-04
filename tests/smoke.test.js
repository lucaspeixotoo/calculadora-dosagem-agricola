const request = require("supertest");
const app = require("../src/app");

describe("Smoke Test - Calculadora de Dosagem Agricola", () => {
  test("API deve realizar um calculo basico com sucesso", async () => {
    const resposta = await request(app)
      .post("/calculos")
      .send({
        areaHectares: 10,
        doseRecomendadaPorHectare: 5
      });

    expect(resposta.status).toBe(201);
    expect(resposta.body.dosagemTotal).toBe(50);
  });
});
