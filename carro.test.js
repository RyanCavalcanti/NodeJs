const carro = require("./carro.js");

describe("Testes para calcularCombustivel", () => {
    test('A distância informada é inválida.', () => { 
        expect(carro.calcularCombustivel(0, '')).toMatch('A distância informada é inválida.'); 
    });

    test("Tipo de combustível inválido. Informe Gasolina ou Etanol.", () => {
        expect(carro.calcularCombustivel(10, 'Alcool')).toMatch('Tipo de combustível inválido. Informe Gasolina ou Etanol.');
    });

    test("Cálculo do combustível para percorrer o percurso com gasolina.", () => {
        expect(carro.calcularCombustivel(10, 'Gasolina')).toMatch('Você deve ter no mínimo 160 para percorrer o percurso.');
    });

    test("Cálculo do combustível para percorrer o percurso com etanol.", () => {
        expect(carro.calcularCombustivel(10, 'Etanol')).toMatch('Você deve ter no mínimo 110 para percorrer o percurso.');
    });
});
