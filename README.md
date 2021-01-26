# Spedy Desafio Técnico

Projeto sobre uma aplicação web para exibir classificados na internet.

## Tecnologias

No Front-end foram utilizados:
``React, React-Router, Redux, Redux-Saga, Material-UI, Axios e Formik```

No Back-end foram utilizados:
``Spring, Spring Boot, Hibernate e MySQL```

###

Se a porta do front-end for alterada, é necessário ajustar no back-end, no arquivo

### `server/src/main/java/../dao/ClassificadoRepository`

Caso a porta do back-end for alterada, é necessário ajustar no front-end, o proxy no arquivo

### `client/package.json`

E a baseUrl no axios no arquivo

### `src/services/api`
