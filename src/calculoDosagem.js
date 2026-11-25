function calcularDosagemTotal(areaHectares, doseRecomendadaPorHectare) {

    if (typeof areaHectares !== "number" || typeof doseRecomendadaPorHectare !== "number") {
        throw new Error("A área e dose informada devem ser numéricos");
    }

    if (!Number.isFinite(areaHectares) || !Number.isFinite(doseRecomendadaPorHectare)) {
        throw new Error("A área e dose informada devem ser valores finitos.");
    }

    if (areaHectares <= 0 || doseRecomendadaPorHectare <= 0) {
        throw new Error("A área e dose informada devem ser valores positivos.");
    }

    return areaHectares * doseRecomendadaPorHectare;
}

module.exports = { calcularDosagemTotal };