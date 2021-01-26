# Spedy Desafio Técnico

Back-end Rest API do projeto de construir uma aplicação web para exibir classificados na internet.

Foi utilizado Spring, Spring Boot, Hibernate e MySQL.

## Setup

Iniciar em qualquer IDE Java, compatível com JAVA 8.

Necessário instalar Lombok na IDE, caso já não tenha feito.

Há um arquivo `createdb.sql` que deve ser rodado no MySQL para gerar o DB

API é acessada através do endereço: http://localhost:8080/

## Endpoints

GET classificados: http://localhost:8080/classificados/

POST das classificados: http://localhost:8080/classificados/

GET da classificado com ID: http://localhost:8080/classificados/{id}

PUT da classificado com ID: http://localhost:8080/classificados/{id}

DELETE da classificado com ID: http://localhost:8080/classificados/{id}

PATCH da classificado com ID: http://localhost:8080/classificados/{id}
GET dos classificados ordernado pela Data de Cadastro: http://localhost:8080/pessoas/search/findAllByOrderByDataCadastroAsc

## Testes

Os testes podem ser efetuados quando a API estiver rodando.
