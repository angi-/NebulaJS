import express, { Router } from 'express';
export default class BaseRouter {
    protected router: Router;
    constructor();
    addMiddleware(middleware: any): void;
    get(url: string, ...middlewares: any): void;
    put(url: string, ...middlewares: any): void;
    post(url: string, ...middlewares: any): void;
    delete(url: string, ...middlewares: any): void;
    all(url: string, ...middlewares: any): void;
    getExpressRouter(): express.Router;
}
