import express from 'express';
import ProdutoRouter from '../routes/produto.router.js';

class App {
    app;
    constructor() {
        this.app = express();
        this.app.use(ProdutoRouter);
    }
}

export default new App().app;