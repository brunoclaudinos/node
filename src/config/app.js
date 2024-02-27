import express from 'express';
import MongoDatabase from '../config/mongo.js';
import ProdutoRouter from '../routes/produto.router.js';

class App {
    app;
    constructor() {
        this.app = express();
        this.iniciarMongo();
        this.app.use(ProdutoRouter);
    }

    iniciarMongo() {
        MongoDatabase.connect()
            .then(() => {
                console.info('MongoDB conectado!');
            })
            .catch((error) => {
                console.error('Erro ao conectar no MongoDB: ');
                console.error(error);
            });
    }
}

export default new App().app;