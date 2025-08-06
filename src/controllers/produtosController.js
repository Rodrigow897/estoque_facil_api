const pool = require('../config/db');

const addProduto = async (req, res) =>{
    const { nome, descricao, preco, quantidade } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO tb_produtos (nome, descricao, preco, quantidade) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, descricao, preco, quantidade]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        res.status(500).json({ error: 'Erro ao adicionar produto' });
    }
}

const getProdutos = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tb_produtos');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao obter produtos:', error);
        res.status(500).json({ error: 'Erro ao obter produtos' });
    }
}

const getProdutoById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('SELECT * FROM tb_produtos WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao obter produto:', error);
        res.status(500).json({ error: 'Erro ao obter produto' });
    }
}

const updateProduto = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, quantidade } = req.body;

    try {
        const result = await pool.query(
            'UPDATE tb_produtos SET nome = $1, descricao = $2, preco = $3, quantidade = $4 WHERE id = $5 RETURNING *',
            [nome, descricao, preco, quantidade, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
}

const patchQuantidadeProduto = async (req, res) => {
    const { id } = req.params;
    const { quantidade } = req.body;

    try {
        const result = await pool.query(
            'UPDATE tb_produtos SET quantidade = $1 WHERE id = $2 RETURNING *',
            [quantidade, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar a quantidade do produto:', error);
        res.status(500).json({ error: 'Erro ao atualizar a quantidade do produto' });
    }
};

const deleteProduto = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM tb_produtos WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.status(201).json({message: 'porduto deletado com sucesso'});
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
}

module.exports = {
    addProduto,
    getProdutos,
    getProdutoById,
    updateProduto,
    patchQuantidadeProduto,
    deleteProduto
};