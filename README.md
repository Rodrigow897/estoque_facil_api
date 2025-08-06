
# Estoque facil API

Esta é uma API simples para gerenciar estoques de produtos, permitindo criar, listar, buscar, atualizar produto e/ou somente a quantidade e deletar produtos.




## Instalação

Instale estoque_facil com npm

```bash
  npm install
  npm start
```
    
## Documentação da API

#### Retorna todos os produtos

```http
  GET /produtos
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `produtos` | `string` | endpoint

#### Retorna um produto

```http
  GET /items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

#### Adiciona um novo produto

```http
  POST /produtos
```

json {
    "nome":"mouse",
	"descricao":"mouse logitech",
	"preco": 250.00,
	"quantidade": 30
}

* Resposta de Sucesso (201 OK): Retorna o corpo da requisição

## Atualizar produto

```http
  PUT /produtos/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

json {
    "nome":"teclado",
	"descricao":"teclado logitech",
	"preco": 300.00,
	"quantidade": 30
}

* Resposta de Sucesso (201 OK): Retorna o corpo da requisição

## Atualizar apenas o estoque / adicionar ou subtrair quantidade

```http
  PATCH /produtos/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

json {
    "quantidade": 20
}

json {
    "quantidade": -5
}

* Resposta de Sucesso (201 OK): Retorna a quantidade somada para numeros positivos e subtraidas para numeros negativos

## Deletar produtos

```http
  DELETE /produtos/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

* Resposta de Sucesso (201 ok): ({message: 'porduto deletado com sucesso'})








## tecnologias usadas

* Node.js e Express: O projeto utiliza o Express, um framework web para Node.js, para criar a API.

* PostgreSQL: O banco de dados utilizado é o PostgreSQL, e a conexão com ele é feita através da biblioteca pg.

* CORS: O módulo cors está sendo utilizado para habilitar o Cross-Origin Resource Sharing.

* dotenv: Embora não esteja no código, o uso de process.env.PORT no server.js sugere o uso de variáveis de ambiente, comumente gerenciadas pelo pacote dotenv.

