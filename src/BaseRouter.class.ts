import express, { Router } from 'express'

export default class BaseRouter {
    protected router: Router;

    constructor() {
        this.router = express.Router();
    }

    addMiddleware(middleware: any) {
        this.router.use(middleware);
    }

    get(url: string, ...middlewares: any) {
        this.router.get(url, middlewares);
    }

    put(url: string, ...middlewares: any) {
        this.router.put(url, middlewares);
    }

    post(url: string, ...middlewares: any) {
        this.router.post(url, middlewares);
    }

    delete(url: string, ...middlewares: any) {
        this.router.delete(url, middlewares);
    }

    all(url: string, ...middlewares: any) {
        this.router.all(url, middlewares);
    }

    getExpressRouter() {
        return this.router;
    }
}
