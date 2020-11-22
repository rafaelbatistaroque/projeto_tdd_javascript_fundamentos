# Fundamentos TDD - Javascript

## 👉 Funcionamento - Mocha

### describe

Descreve o que será testado ou, normalmente, o nome do domínio (classe).

```javascript
describe("...");

//Code:
describe("Produto", () => {});
```

### context

Usado para separar os casos de testes.

```javascript
context("...");

//Code:
describe("Produto", () => {
  context("adicionarProduto", () => {});
  context("AtualizarProduto", () => {});
});
```

### it

Usado para expôr o que deve acontecer. Seu callback que executará os testes.

```javascript
it("...");

//Code:
describe("Produto", () => {
  context("cadastrarProduto", () => {
    it("Deve retornar 'ok' ao cadastar um produto", () => {});
    it("Deve retornar 'erro' se não adicionar nome do produto", () => {});
  });
});
```

### Reposters

Informa como os testes estão passando de formas diferentes no console.

```
$ yarn test -- --reporters
```

Executa o teste com o modelo selecionado.

```
$ yarn test -- --reporter=doc
```

### Bail

Interrompe os testes ao encontrar o primeiro erro.

```
$ yarn test -- --bail
```

### context.only

Executa apenas o determinado bloco de testes.

```javascript
describe("Produto", () => {
  context.only("adicionarProduto", () => {}); //Executa
  context("AtualizarProduto", () => {}); //Ignora
});
```

### context.skip

"Pula/Não executa" apenas o determinado bloco de testes.

```javascript
describe("Produto", () => {
  context.skip("adicionarProduto", () => {}); //Ignora
  context("AtualizarProduto", () => {}); //Executa
});
```

### hooks

Cria métodos que serão executados no ciclo de vida do teste, permitindo criar um conjunto de dados, pré determinados que serão apagados.

```javascript
before(() => {
  console.log("#before");
}); //Exeuta uma vez no bloco principal, antes do context.

after(() => {
  console.log("#after");
}); //Exeuta uma vez no bloco principal, depois do context.

beforeEach(() => {
  console.log("-> beforeEach");
}); //Exeuta todas as vezes antes de cada bloco it().

afterEach(() => {
  console.log("-> afterEach");
}); //Exeuta todas as vezes depois de cada bloco it().

//Code:
describe("Produto", () => {
  context("cadastrarProduto", () => {
    it("Deve retornar 'ok' ao cadastar um produto", () => {});
    it("Deve retornar 'erro' se não adicionar nome do produto", () => {});
  });

  context("AtualizarProduto", () => {
    it("Deve retornar 'ok' ao atualizar um produto", () => {});
    it("Deve retornar 'erro' se não atualizar nome do produto", () => {});
  });
});

//Resultado:
/*

#before
    cadastrarProduto
-> beforeEach
      √ Deve retornar 'ok' ao cadastar um produto
-> afterEach
-> beforeEach
      √ Deve retornar 'erro' se não adicionar nome do produto
-> afterEach
    AtualizarProduto
-> beforeEach
      √ Deve retornar 'ok' ao atualizar um produto
-> afterEach
-> beforeEach
      √ Deve retornar 'erro' se não atualizar nome do produto
-> afterEach
#after

 */
```
