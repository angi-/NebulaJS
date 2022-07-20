"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NotImplementedException_1 = __importDefault(require("../Exceptions/NotImplementedException"));
class DatabaseResource {
    constructor() {
    }
    async findOne(id) {
        throw new NotImplementedException_1.default();
    }
    async findAll(id, params) {
        throw new NotImplementedException_1.default();
    }
    async create(data) {
        throw new NotImplementedException_1.default();
    }
    async update(id, data) {
        throw new NotImplementedException_1.default();
    }
    async remove(id) {
        throw new NotImplementedException_1.default();
    }
}
exports.default = DatabaseResource;
