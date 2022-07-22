import express, { Router } from 'express'
import { INeutronCoreContext } from './NeutronCore.class';

export default class BaseRouter {
    protected router: Router;
    protected context: INeutronCoreContext;

    constructor(context: INeutronCoreContext) {
        this.router = express.Router();
        this.context = context;
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
