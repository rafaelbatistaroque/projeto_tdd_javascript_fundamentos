import { expect } from "chai";
import fizz_buzz from "../src/fizz_buzz";

describe.only("Fizz Buzz", () => {
  let MENSAGEM;
  let TIPOS;

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
    it("Deve importar o bibliteca fizz_buzz", () => {
      expect(fizz_buzz).to.be.exist;
      expect(fizz_buzz).to.be.a(TIPOS.FUNCTION);
    });
  });

  context("Jogo", () => {
    it("Deve retornar 'Fizz' quando multiplo de 3", () => {
      expect(fizz_buzz(3)).to.equal("Fizz");
    });

    it("Deve retornar 'Buzz' quando multiplo de 5", () => {
      expect(fizz_buzz(5)).to.equal("Buzz");
    });

    it("Deve retornar 'FizzBuzz' quando multiplo de 3 e 5", () => {
      expect(fizz_buzz(15)).to.equal("FizzBuzz");
    });

    it("Deve retornar o número quando não for multiplo de 3 ou 5", () => {
      let nr = 11;
      expect(fizz_buzz(nr)).to.equal(nr);
    });
  });
});
