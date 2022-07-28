"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseException extends Error {
    constructor(message) {
        super();
        this.name = 'BaseException';
        this.message = message;
    }
}
exports.default = BaseException;
