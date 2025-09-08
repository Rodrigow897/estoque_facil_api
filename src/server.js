const express = require('express');
const app = express();
const produtosRoutes = require('./routes/produtosRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Estoque Facil API',
            version: '1.0.0',
            description: 'API para gerenciamento de estoque de produtos',
        },
        servers: [
            {
                url: 'http://localhost:3000',
        }    ],
    },
    apis: ['./src/routes/*.js', './src/controllers/*.js'],
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('bem vindo ao Estoque Facil API');
});

app.use('/produtos', produtosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});