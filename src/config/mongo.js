import { MongoClient } from 'mongodb';

class MongoDatabase {
    conexao;
    uri = 'mongodb://localhost:27017';
    databaseName = 'nodejs';

    async connect() {
        try {
            const client = new MongoClient(this.uri);
            await client.connect();
            this.conexao = client.db(this.databaseName);
        } catch (error) {
            throw error;
        }
    }

    find(filtro, collection) {
        try {
            return this.conexao.collection(collection).find(filtro).toArray();
        } catch (error) {
            throw error;
        }
    }

    findLimitado(filtro, collection, limit) {
        try {
            return this.conexao
                .collection(collection)
                .find(filtro)
                .limit(Number(limit))
                .toArray();
        } catch (error) {
            throw error;
        }
    }

    insertMany(dados, collection) {
        try {
            return this.conexao.collection(collection).insertMany(dados);
        } catch (error) {
            throw error;
        }
    }

}
export default new MongoDatabase();