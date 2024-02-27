import express from 'express';
import ProdutoController from '../controller/produto.controller.js';

const router = express.Router()

// Buscar produtos
router.get('/produto', (req, res, next) => {
    ProdutoController.listar()
        .then(
            (response) => {
                res.json(response);
            },
            (error) => {
                next(error);
            });
});

// Inserir dados ficticios para consultas
router.get('/produto/dados-ficticios', (req, res, next) => {
    ProdutoController.inserirDadosFicticios()
        .then(
            (response) => {
                res.json(response);
            },
            (error) => {
                next(error);
            });
});

export default router;