<h1>desafio-treinow</h1>

<p align="center">
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
</p>

- [📑 Sobre o projeto](#-sobre)
- [📖 Documentação](#-documentacao)
- [📥 Gerenciador de pacotes](#-pacotes)
- [🚀 Começando](#-comecando)

## 📖 Documentação

- [[Project] - Diagrama de classes](./DOCS/diagram.png)

- [[Project] - Diagrama de relação de entidades](./DOCS/ERD.png)

- [[Project] - Coleção da API para imsomnia](./DOCS/Insomnia_2023-02-27.json)

## 📑 Sobre
Código desenvolvido para o desafio Treinow - Node Challenger
O código foi desenvolvido utilizando TypeScript e node, para a comunicação foi utilizado Express, para acesso e manipulação de banco de dados foi utilizado Prisma, para autentificação / login de usuários foi utilizado JWT(JSON Web Token) e para documentação foi utilizado Prisma ERD.
O projeto apresenta todos os endpoint requisitados, além de algumas adições que acreditei que agregariam positivamente.

# 📥 Pacotes
O projeto foi desenvolvido utilizando NPM, mas você pode utilizar qualquer um dos gerenciadores abaixo:
- Yarn
- PNPM
- NPM

## 🚀 Comecando

### Passo 1:
  > Ao clonar o projeto execute o comando **npm install** no terminal para instalar as dependências.
  
### Passo 2:
  > Crie o arquivo **.env** na raiz do projeto para fazer a conexão com o banco de dados.
  
### Passo 3:
  > Para conectar com o banco de dados escreva a seguinte linha no arquivo **.env**: *DATABASE_URL="file:./dev.db"* ou encontre a mesma linha no arquivo [.env.example] (./.env.example)
 
### Passo 4:
  > Ative o servidor node com: **npm run dev**. Isto fara com que sua aplicação seja iniciada e comece a receber requisições.
  
  ### Passo 5: 
  > Depois execute o comando: **npm run migrate**. Criando assim uma nova migração para o banco de dados.
 
### Passo 6:
  > Depois rode no terminal o comando:**npm run studio**. Isto mostrará o seu banco de dados utilizando o layout prisma.

