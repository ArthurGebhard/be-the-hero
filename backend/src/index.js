const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // ./ significa que é pasta e não pacote

const app = express();

app.use(cors());
app.use(express.json()); //Falando ao express que o corpo de requisições precisara converter um json 
app.use(routes);

/**
 *  Rotas: http://localhost:3333/users
 *  Recurso: /Users
 */

app.listen(3333); //padrão ideal para a linguagem