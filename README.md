# 📦 TaskManager

Aplicação web simples para gerenciamento de listas de tarefas, construída com Node.js, Express e EJS. Permite criar listas de tarefas, adicionar tarefas, marcar como concluídas e excluir listas.

## 🧰 Tecnologias utilizadas

- Node.js
- Express
- EJS (template engine)
- Bootstrap 5
- Nodemon (para desenvolvimento)

## 📁 Estrutura do Projeto

- `src/views`: Templates EJS das páginas (index, listas, nova lista, etc).
- `src/views/partials`: Cabeçalho e rodapé reutilizáveis.
- `src/controllers`: Controladores que gerenciam as rotas e lógica das tarefas.
- `src/routes.js`: Definição das rotas da aplicação.
- `src/server.js`: Configuração do servidor Express.
- `public/assets`: Arquivos estáticos como CSS e imagens.

## 🚀 Como rodar o projeto

1. Clone o repositório e acesse a pasta do projeto:  
   ```bash
   git clone git@github.com:hello-arth/task-manager.git  
   cd task-manager
    ```
2. Instale as dependências:  
   ```bash
   npm install
   ```
3. Inicie o servidor em modo desenvolvimento:  
   ```bash
   npm run dev
   ```

4. Acesse no navegador:  
    ```bash
    http://localhost:3000
    ```

## 🔄 Funcionalidades

- Página inicial com boas-vindas  
- Visualização de todas as listas de tarefas criadas  
- Criação de novas listas de tarefas  
- Visualização e adição de tarefas dentro de cada lista  
- Marcar tarefas como concluídas  
- Exclusão de listas de tarefas

## 📸 Capturas de Tela

![Home](https://github.com/user-attachments/assets/5ed1a004-0105-4b09-af9e-4841cd014999)

![Task Lists](https://github.com/user-attachments/assets/628bc9dd-12c5-4db1-ac9c-03a2142328a5)

![Task](https://github.com/user-attachments/assets/bcbb9eea-6b01-4691-a214-445d982d6ffe)


## 📄 Licença

ISC © [Arthur Henrique](https://github.com/hello-arth) 
