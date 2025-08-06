const express = require('express');
const app = express();
const produtosRoutes = require('./routes/produtosRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('bem vindo ao Estoque Facil API');
});

app.use('/produtos', produtosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});