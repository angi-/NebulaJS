"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_class_1 = __importDefault(require("../BaseRouter.class"));
const TestController_1 = __importDefault(require("./TestController"));
class TestRouter extends BaseRouter_class_1.default {
    constructor() {
        super();
        const testController = new TestController_1.default();
        this.get('/test', (req, res, next) => testController.get(req, res, next));
    }
}
exports.default = TestRouter;
