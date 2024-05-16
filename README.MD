# App 

Aplicativo para controle de entrevistados

 cadastrar, consultar, editar, remover e pesquisar, armazenando esses dados em um banco de dados qualquer. Obrigatoriamente essa aplicação deve possuir as camadas bem definidas e seguir algum padrão de projeto.

## Requisitos Funcionais 

[ x ] - Deve ser possível usuário se cadastrar,
[ x ] - Deve ser possível se autenticar,
[ ] - Deve ser possível criar entrevistado 
[ ] - Deve ser possível consultar entrevistado 
[ ] - Deve ser possível alterar entrevistado
[ ] - Deve ser possível Remover entrevistado


## Regras de negócio 

[ x ] - O usuário não pode se cadastrar com um e-mail duplicado
[ x ] - O usuario só pode ver os dados que estão cadastrados no seu perfil


## Requisitos não funcionais

[ x ] - A senha do usuário deve estar criptografada
[ x ] - Os dados da aplicação precisam estar persistidos em um banco PostgreSQL 
[ ] - Todas as listas de dados precisam estar paginados com 20 items por página
[ ] - O usuário deve ser indentificado pelo JWT