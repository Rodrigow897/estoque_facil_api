const express = require('express');
const produtosController = require('../controllers/produtosController');
const router = express.Router();

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Cria um produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mouse
 *               description:
 *                 type: string
 *                 example: "a mouse for you baby"
 *               preco:
 *                 type: number
 *                 format: float
 *                 example: 12.00
 *               quantidade:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       '200':
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 2
 *                 name:
 *                   type: string
 *                   example: Mouse
 *                 description:
 *                   type: string
 *                   example: "a mouse for you baby"
 *                 preco:
 *                   type: number
 *                   format: float
 *                   example: 12.00
 *                 quantidade:
 *                   type: integer
 *                   example: 5
 *       '500':
 *         description: Falha ao criar produto
 */
router.post('/', produtosController.addProduto);

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Retorna a lista de todos os produtos
 *     responses:
 *       '200':
 *         description: Lista de produtos retornada com sucesso
 *       '404':
 *         description: Nenhum produto encontrado
 */
router.get('/', produtosController.getProdutos);

/** 
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Retorna um produto pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       '200':
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Mouse
 *                 description:
 *                   type: string
 *                   example: "a mouse for you baby"
 *                 preco:
 *                   type: number
 *                   format: float
 *                   example: 12.00
 *                 quantidade:
 *                   type: integer
 *                   example: 5
 *       '404':
 *         description: Produto não encontrado
 */
router.get('/:id', produtosController.getProdutoById);

/** 
 * @swagger
 * /api/product/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mouse
 *               description:
 *                 type: string
 *                 example: "a mouse for you baby"
 *               preco:
 *                 type: number
 *                 format: float
 *                 example: 12.00
 *               quantidade:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       '200':
 *         description: Produto atualizado com sucesso
 *       '404':
 *         description: Produto não encontrado
 *       '500':
 *         description: Erro ao atualizar produto
 */
router.put('/:id', produtosController.updateProduto);

/** 
 * @swagger
 * /api/product/{id}:
 *   patch:
 *     summary: Atualiza a quantidade de um produto pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantidade:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       '200':
 *         description: Quantidade do produto atualizada com sucesso
 *       '400':
 *         description: Requisição inválida
 *       '404':
 *         description: Produto não encontrado
 *       '500':
 *         description: Erro ao atualizar quantidade do produto
 */
router.patch('/:id', produtosController.patchQuantidadeProduto);

/** 
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: Deleta um produto pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       '201':
 *         description: Produto deletado com sucesso
 *       '404':
 *         description: Produto não encontrado
 *       '500':
 *         description: Erro ao deletar produto
 */
router.delete('/:id', produtosController.deleteProduto);

module.exports = router;
