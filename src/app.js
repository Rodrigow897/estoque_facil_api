const express = require('express');
const app = express();
const produtosRoutes = require('./routes/produtosRoutes');

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('bem vindo ao Estoque Facil API');
});

app.use('/produtos', produtosRoutes);

module.exports = app;