"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseException {
    constructor(message) {
        this.message = message;
        this.name = 'Exception';
    }
    setName(name) {
        this.name = name;
    }
}
exports.default = BaseException;
