import express from 'express';
import ProdutoController from '../controller/produto.controller.js';

const router = express.Router()

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

export default router;