"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FallbackRouter_1 = __importDefault(require("./FallbackRouter"));
class NeutronCore {
    constructor(port, config) {
        this.port = port;
        this.config = config;
        this.app = (0, express_1.default)();
        this.use(express_1.default.json());
    }
    use(handler) {
        this.app.use(handler);
    }
    addRouter(router) {
        var _a;
        const prefix = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.routesPrefix) ? `/${this.config.routesPrefix}` : '';
        this.app.use(prefix, router.getExpressRouter());
    }
    start() {
        this.addRouter(new FallbackRouter_1.default());
        this.app.listen(this.port, () => {
            console.log(`⚡️ [server]: NebulaJS server is running at https://localhost:${this.port}`);
        });
    }
}
exports.default = NeutronCore;
