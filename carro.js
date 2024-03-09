function calcularCombustivel(distancia, tipoCombustivel) {
    if (isNaN(distancia) || distancia <= 0) {
        return "A distância informada é inválida.";
    }
    
    if (tipoCombustivel !== "Gasolina" && tipoCombustivel !== "Etanol") {
        return "Tipo de combustível inválido. Informe Gasolina ou Etanol.";
    }

    let consumoPorKm = tipoCombustivel === "Gasolina" ? 16 : 11;
    let resultadoDistancia = distancia * consumoPorKm;

    return `Você deve ter no mínimo ${resultadoDistancia} para percorrer o percurso.`;
}

module.exports = { calcularCombustivel };