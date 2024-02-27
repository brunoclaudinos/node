import MongoDatabase from '../config/mongo.js';

class ProdutoController {

    async listar() {
        return await MongoDatabase.find({}, 'PRODUTO');
    }

    async inserirDadosFicticios() {
        const lista = [];
        for (let index = 1; index <= 1000000; index++) {
            console.log('Inserindo produto ' + index);
            const produto = { codigo: 'P' + index, descricao: 'Produto' + index };
            lista.push(produto);
        }

        return await MongoDatabase.insertMany(lista, 'PRODUTO');
    }
}

export default new ProdutoController();