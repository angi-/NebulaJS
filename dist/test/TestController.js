"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_class_1 = __importDefault(require("../BaseController.class"));
class TestController extends BaseController_class_1.default {
    constructor() {
        super();
    }
    async get(req, res, next) {
        this.apiResponse.success(res, 'Hello world!');
    }
}
exports.default = TestController;
