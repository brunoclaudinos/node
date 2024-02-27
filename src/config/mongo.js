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

}
export default new MongoDatabase();