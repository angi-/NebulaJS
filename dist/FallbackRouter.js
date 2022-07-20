"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_class_1 = __importDefault(require("./BaseRouter.class"));
class FallbackRouter extends BaseRouter_class_1.default {
    constructor() {
        super();
        this.all('*', (req, res) => res.status(404).send({
            message: 'This resource does not exist'
        }));
    }
}
exports.default = FallbackRouter;
