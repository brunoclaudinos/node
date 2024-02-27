import MongoDatabase from '../config/mongo.js';

class ProdutoController {

    async listar() {
        return await MongoDatabase.find({}, 'PRODUTO');
    }
}

export default new ProdutoController();