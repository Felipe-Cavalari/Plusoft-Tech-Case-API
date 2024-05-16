# Fiz um APP para RH focado em uma lista de entrevistados com suas descrições e contatos


## Técnologias:
- Utilizei como framework de nodeJS o express que é o mais usado no mercado atualmente
- Programei em TypeScript pois prefiro o desenvolvimento mais inteligente e limpo que ele traz
- Utilizei o prisma como ORM pois nunca havia utilizado e quis me desafiar

## Ideia:
 A ideia inicial do app era cada usuário ser responsável pelo seus intrevistados porém não tive tempo de implementar lógica
 de JWT e secret_key então atualmente funciona com o crud básico de get, post, put, delete

 

<br>



### Para iniciar o app rodar o arquivo docker compose
```
docker compose run
```

### Instalar os pacotes com npm, yarn, ou qualquer um da preferência
```
npm install
```

### Rodar as migrations do Prisma
```
npx prisma migrate dev
```


A ideia do app era criar usuários e entrevistados vinculados com os usuários porém meu tempo foi curto

porém as rotas de usuários e entrevistados funcionam todos os cruds(get, post, put, delete) \ 

obs: as rotas put todos os campos são opcionais menos o do ID

## Rotas dos usuários

#### Criação :
post: http://localhost:3333/users \
body: {
    "name": "string",
    "email": "string",
    "password": "string"
}

#### Alteração :
put: http://localhost:3333/users/:id -- passar o id do usuário que for alterado\
body: {
    "name": "string",
    "email": "string",
    "password": "string"
}

#### Consulta total :
get: http://localhost:3333/users/

#### Consulta por ID :
get: http://localhost:3333/users/:id

#### deletar :
delete: http://localhost:3333/users/:id

## Rotas dos Entrevistados

#### Criação :
post: http://localhost:3333/intervieweds\
body: {
    "interviewedName": "Felipe Cavalari",
    "interviewedEmail": "felipeCavalari@gmail.com",
    "interviewedPhone": "+5511898435464",
    "description": "Especialista em  Python, nodeJs e react",
    "status": "Em entrevista"
}

#### Alteração :
put: http://localhost:3333/intervieweds/:id -- passar o id do entrevistado que for alterado \
body: {
    "interviewedName": "Felipe Cavalari",
    "interviewedEmail": "felipeCavalari@gmail.com",
    "interviewedPhone": "+5511898435464",
    "description": "Especialista em  Python, nodeJs e react",
    "status": "Em entrevista"
}

#### Consulta total :
get: http://localhost:3333/intervieweds/

#### Consulta por ID :
get: http://localhost:3333/intervieweds/:id

#### deletar :
Optei por não colocar o delete nesse caso pois a ideia é que o entrevistado fique na base



# mantive o .env para vocês terem acesso