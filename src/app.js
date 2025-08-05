const express = require('express');
const app = express();
const pool = require('./config/db');

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('bem vindo ao Estoque Facil API');
});

module.exports = app;