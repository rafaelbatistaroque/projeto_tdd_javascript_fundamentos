import { expect } from "chai";
import { soma, subtracao, multiplicacao, divisao } from "../src/calculadora";

describe("Calculadora", () => {
  let TIPOS;
  let MENSAGEM = "";

  before(() => {
    MENSAGEM = "não é possível divisão por zero";
    TIPOS = {
      FUNCTION: "function",
      BOOLEAN: "Boolean",
      STRING: "string",
      ARRAY: "array",
    };
  });

  after(() => {
    TIPOS = null;
    MENSAGEM = null;
  });

  context("Smoke tests", () => {
    it("Deve existir a função soma", () => {
      expect(soma).to.exist;
      expect(soma).to.be.a(TIPOS.FUNCTION);
    });

    it("Deve existir a função subtracao", () => {
      expect(subtracao).to.exist;
      expect(subtracao).to.be.a(TIPOS.FUNCTION);
    });

    it("Deve existir a função multiplicacao", () => {
      expect(multiplicacao).to.exist;
      expect(multiplicacao).to.be.a(TIPOS.FUNCTION);
    });

    it("Deve existir a função divisao", () => {
      expect(divisao).to.exist;
      expect(divisao).to.be.a(TIPOS.FUNCTION);
    });
  });
  context("Soma", () => {
    it("Deve retornar 4 quando soma de 2 + 2", () => {
      expect(soma(2, 2)).to.be.equal(4);
    });
  });

  context("Subtração", () => {
    it("Deve retornar 4 quando subtrair de 12 + 8", () => {
      expect(subtracao(12, 8)).to.be.equal(4);
    });

    it("Deve retornar -5 quando subtrair de 10 - 15", () => {
      expect(subtracao(10, 15)).to.be.equal(-5);
    });
  });

  context("Multiplicação", () => {
    it("Deve retornar 16 quando multiplicar de 4 * 4", () => {
      expect(multiplicacao(4, 4)).to.be.equal(16);
    });
  });

  context("Divisão", () => {
    it("Deve retornar 14 quando dividir de 56 / 4", () => {
      expect(divisao(56, 4)).to.be.equal(14);
    });

    it("Deve retornar 'MENSAGEM' quando divisão por 0", () => {
      expect(divisao(56, 0)).to.be.equal(MENSAGEM);
    });
  });
});
