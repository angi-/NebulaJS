"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_class_1 = __importDefault(require("./BaseRouter.class"));
class BaseService extends BaseRouter_class_1.default {
    constructor(path, resource) {
        super();
        this.path = path;
        this.resource = resource;
        // this.get('')
        // TODO
    }
}
exports.default = BaseService;
