<h1 align="center">
    Todo List Project
</h1>

<p align="center">
  <a href="https://www.linkedin.com/in/joaorpereira/">
    <img 
        alt="Made by Joao Paulo" 
        src="https://img.shields.io/badge/MADE%20BY-Joao%20Paulo-%230077b5?style=flat-square&logo=linkedin">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%20brightgreen?style=flat-square&logo=">

  <a href="https://www.typescript.com/">
    <img 
        alt="TypeScript" 
        src="https://img.shields.io/badge/Stack-TypeScript-%230077b5?style=flat-square&logo=TypeScript">
  </a>
  <a href="https://github.com/abner-starkasty/restaurante-padre-cicero/tree/main/backend">
    <img 
        alt="server Node.js" 
        src="https://img.shields.io/badge/Server-Node.js-%23339933?style=flat-square&logo=node.js">
  </a>
  <a href="https://github.com/abner-starkasty/restaurante-padre-cicero/tree/main/frontend">
    <img 
        alt="web React" 
        src="https://img.shields.io/badge/Web-React-%23007ACC?style=flat-square&logo=REACT">
  </a>
</p>

---

<p align="center">
 <a href="#-about">About</a> •
 <a href="#-technologies">Technologies</a> • 
 <a href="#-how-to-download-the-project">How to download the project</a> • 
 <a href="#-license">License</a> • 
 <a href="#-developer">Developer</a>
</p>

---
### 🔖 About

**Todo List** is a system to manage your task.

A fullstack project where backend was developed using NodeJS to developer the Rest API, ReactJS to developer the Frontend and MySQL as a database.

---
### 🛠 Technologies

The following technologies/tools were used:

- [Typescript](https://www.typescriptlang.org/);
- [ECS6+](http://www.ecma-international.org/ecma-262/6.0/);
- [ReactJs](https://reactjs.org/);
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS);
- [Styled-Components](https://styled-components.com/);
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML);
- [Node.js](https://nodejs.org/en/);
- [axios](https://www.npmjs.com/package/axios);
- [Express](https://expressjs.com/);
- [MySQL](https://www.mysql.com/);
- [Insomnia](https://insomnia.rest/);
- [Git](https://git-scm.com/);
- [VSCode](https://code.visualstudio.com/);

---
### 📎 How to download the project

##### 👉 Tools needed:
- [Vscode](https://code.visualstudio.com/) was used in this project; 
- [Node.Js](https://nodejs.org/en/) - Installed on your machine;
- [Git](https://git-scm.com/downloads) - Installed on your machine;

##### 👉 Install dependencies:

```bash

#-> In the terminal:

# Clone repository:
$ git clone https://github.com/joaorpereira/todo-list.git

# To run the frontend:
-> $ cd client
-> $ cd api 

# Install dependencies:
$ npm install  # In the client folder
$ yarn # In the api folder

# Start the project
$ npm start # In the client folder
$ yarn dev # In the api folder

# After loading the project it will automatically open a tab in the default browser.

```
---

### MySQL database

##### Create MySQL schema using MySQL Workbench:

##### MYSQL credentials:
```bash
  PORT=3003
  TYPEORM_CONNECTION = 
  TYPEORM_HOST = 
  TYPEORM_USERNAME = 
  TYPEORM_PASSWORD = 
  TYPEORM_DATABASE = 
  TYPEORM_PORT = 3306
  TYPEORM_MIGRATIONS = src/database/migrations/*.ts
  TYPEORM_MIGRATIONS_DIR = src/database/migrations
  TYPEORM_ENTITIES = src/entities/*.ts
  TYPEORM_ENTITIES_DIR = src/entities
```
##### Create MySQL migrations:
```bash
$ yarn typeorm migration:create -n CreateTasks
```

##### Run MySQL migrations:
```bash
$ yarn typeorm migration:run
```

##### Tssks Table
```bash
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    username VARCHAR(255),
    status BOOL DEFAULT false,
    created_at DATETIME NOT NULL,
```

---
### 📜 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

### 👨‍💻 Developer

<p align="center">
    <a href="https://blog.rocketseat.com.br/author/thiago/">
        <img 
            style="border-radius: 50%;" 
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGEHyoBgJ7tNQ/profile-displayphoto-shrink_200_200/0/1597502062146?e=1651104000&v=beta&t=1b9bKFZUWulw_Tv4uI8ivzYqL9qlTjiKaWRai4JVMYI" 
            width="120px;" 
            alt="Foto">
        <br/>
        <sub><b>Joao Paulo  🚀</b></sub>
    </a>
</p>
<h6 align="center">
    Developed by Joao Paulo.
</h6>
<p align="center">
    <a href="https://www.linkedin.com/in/joaorpereira">
    <img 
        alt="Linkedin Joao Paulo Rodrigues" 
        src="https://img.shields.io/badge/-Joao%20Paulo-%230077b5?style=flat-square&logo=linkedin">
    </a>
    <a href="mailto:rpjoaopaulo28@gmail.com">
        <img 
            alt="gmail Joao Paulo" 
            src="https://img.shields.io/badge/-Gmail-%23c14438?style=flat-square&logo=gmail&logoColor=white">
    </a>
</p>
