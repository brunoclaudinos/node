import express from 'express';
import ProdutoController from '../controller/produto.controller.js';

const router = express.Router()

// Buscar produtos
router.get('/produto', (req, res, next) => {
    ProdutoController.listar()
        .then(
            (response) => res.json(response),
            (error) => next(error)
        );
});

// Buscar produtos com limitação
router.get('/produto/limite/:limit', (req, res, next) => {
    const { limit } = req.params;
    ProdutoController.listarLimitado(limit)
        .then(
            (response) => res.json(response),
            (error) => next(error)
        );
});

// Inserir dados ficticios para consultas
router.get('/produto/dados-ficticios/:quantidade', (req, res, next) => {
    const { quantidade } = req.params;
    ProdutoController.inserirDadosFicticios(quantidade)
        .then(
            (response) => res.json(response),
            (error) => next(error)
        );
});

export default router;