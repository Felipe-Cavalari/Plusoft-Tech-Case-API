# Fiz um APP para RH focado em uma lista de entrevistados com suas descrições e contatos


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