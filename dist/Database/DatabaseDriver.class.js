"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NotImplementedException_1 = __importDefault(require("../Exceptions/NotImplementedException"));
class DatabaseDriver {
    constructor() {
    }
    getResource(name) {
        throw new NotImplementedException_1.default();
    }
}
exports.default = DatabaseDriver;
