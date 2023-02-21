<h1 align="center">desafio-treinow</h1>

Código desenvolvido para o desafio Treinow - Node Challenger

## Executando o projeto

### Passo 1:
  > Ao clonar o projeto execute o comando **npm i** no terminal para baixar as dependências.
  
### Passo 2:
  > Crie o arquivo **.env** na raiz do projeto para fazer a conexão com o banco de dados.
  
### Passo 3:
  > Para conectar com o banco de dados escreva a seguinte linha no arquivo **.env**: *DATABASE_URL="file:./dev.db"*
 
### Passo 4:
  > Ative o servidor node com: **npm run dev**. Isto fara com que sua aplicação seja iniciada e comece a receber requisições.
  
  ### Passo 5: 
  > Depois execute o comando: **npm run migrate**. Criando assim uma nova migração para o banco de dados.
 
### Passo 6:
  > Depois rode no terminal o comando:**npm run studio**. Isto mostrará o seu banco de dados utilizando o layout prisma.
