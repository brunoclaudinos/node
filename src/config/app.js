import express from 'express';

class App {
    app;
    constructor() {
        this.app = express();
    }
}

export default new App().app;