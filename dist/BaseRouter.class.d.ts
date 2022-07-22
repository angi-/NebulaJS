import express, { Router } from 'express';
import { INeutronCoreContext } from './NeutronCore.class';
export default class BaseRouter {
    protected router: Router;
    protected context: INeutronCoreContext;
    constructor(context: INeutronCoreContext);
    addMiddleware(middleware: any): void;
    get(url: string, ...middlewares: any): void;
    put(url: string, ...middlewares: any): void;
    post(url: string, ...middlewares: any): void;
    delete(url: string, ...middlewares: any): void;
    all(url: string, ...middlewares: any): void;
    getExpressRouter(): express.Router;
}
