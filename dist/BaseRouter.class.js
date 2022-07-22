"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class BaseRouter {
    constructor(context) {
        this.router = express_1.default.Router();
        this.context = context;
    }
    addMiddleware(middleware) {
        this.router.use(middleware);
    }
    get(url, ...middlewares) {
        this.router.get(url, middlewares);
    }
    put(url, ...middlewares) {
        this.router.put(url, middlewares);
    }
    post(url, ...middlewares) {
        this.router.post(url, middlewares);
    }
    delete(url, ...middlewares) {
        this.router.delete(url, middlewares);
    }
    all(url, ...middlewares) {
        this.router.all(url, middlewares);
    }
    getExpressRouter() {
        return this.router;
    }
}
exports.default = BaseRouter;
