# challenge-jexperts
Desenvolver uma aplicação que contenha os seguintes requisitos: 

### 1 - CRUD (listagem, criação, alteração e remoção) de usuários: 

    O usuário deve possuir os campos: Nome, E-mail, Telefone, Cargo, Login, Senha, CPF, Superior, Endereços (não obrigatório e pode ter mais de um endereço).

    Os campos Nome, E-mail, Cargo, Login e Senha são obrigatórios. 
    Somente os seguintes cargos serão aceitos: Diretor, Gerente ou Consultor. 
    O Superior será um outro usuário e deverá seguir a hierarquia: O Diretor poderá ter como superior somente outro usuário com esse mesmo cargo. 
    O Gerente poderá ter como superior somente outro Gerente ou Diretor. 
    O Consultor poderá ter como superior qualquer usuário. 
    O Endereço deverá conter os seguintes campos: Rua, Número, Complemento, Bairro, Cidade, Estado, CEP. 
    Caso possua endereço os campos Rua, Número, Bairro, Cidade, Estado e CEP são obrigatórios. 

### 2 - Listagem de subordinados: 

    A listagem deverá conter um campo para escolha do usuário. 
    Listar todos os subordinados de um superior, ou seja, todos os usuários filtrados pelo superior selecionado. 

A aplicação pode ser realizada em tecnologia de sua escolha (Web, Desktop, Linguagem, Banco de dados).

## Para rodar a aplicação

Após clonar o repositório do github, por conta do arquivo .gitignore executar um dos comandos abaixo para carregar os modulos do node dentro da pasta do frontend

    yarn install
    ou
    npm install

Para executar o backend da aplicação:

Dentro da pasta backend, execute o comando abaixo para subir o servidor na porta 3333.

    yarn start
    ou
    npm run-script start
    onde "start" é o script criado no arquivo package.json

Para executar o frontend da aplicação:

Dentro da pasta frontend, execute o comando abaixo para iniciar a aplicação na porta 3000.