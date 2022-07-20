"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiResponse_1 = __importDefault(require("./ApiResponse"));
class BaseController {
    constructor() {
        this.apiResponse = new ApiResponse_1.default();
    }
    async get(req, res, next) {
        this.apiResponse.notFound(res);
    }
    async put(req, res, next) {
        this.apiResponse.notFound(res);
    }
    async post(req, res, next) {
        this.apiResponse.notFound(res);
    }
    async delete(req, res, next) {
        this.apiResponse.notFound(res);
    }
}
exports.default = BaseController;
