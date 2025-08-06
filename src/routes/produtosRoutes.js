const express = require('express');
const produtosController = require('../controllers/produtosController');
const router = express.Router();

router.post('/', produtosController.addProduto);
router.get('/', produtosController.getProdutos);
router.get('/:id', produtosController.getProdutoById);
router.put('/:id', produtosController.updateProduto);
router.patch('/:id', produtosController.patchQuantidadeProduto);
router.delete('/:id', produtosController.deleteProduto);

module.exports = router;