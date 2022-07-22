"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const FallbackRouter_1 = __importDefault(require("./FallbackRouter"));
const DefaultLogger_class_1 = __importDefault(require("./Logger/DefaultLogger.class"));
class NeutronCore {
    constructor(port, config) {
        var _a, _b, _c, _d;
        this.port = port;
        this.config = config;
        this.context = {
            database: ((_a = this.config) === null || _a === void 0 ? void 0 : _a.databaseDriver) || null,
            logger: ((_b = this.config) === null || _b === void 0 ? void 0 : _b.loggerDriver) || new DefaultLogger_class_1.default()
        };
        this.app = (0, express_1.default)();
        this.use(express_1.default.json());
        this.use((0, cors_1.default)({
            origin: ((_c = this.config) === null || _c === void 0 ? void 0 : _c.corsOrigin) || '*',
            optionsSuccessStatus: ((_d = this.config) === null || _d === void 0 ? void 0 : _d.corsSuccessStatus) || 200
        }));
    }
    use(handler) {
        this.app.use(handler);
    }
    addRouter(router) {
        var _a;
        const prefix = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.routesPrefix) ? `/${this.config.routesPrefix}` : '';
        this.app.use(prefix, router.getExpressRouter());
    }
    getContext() {
        return this.context;
    }
    start() {
        this.addRouter(new FallbackRouter_1.default(this.getContext()));
        this.app.listen(this.port, () => {
            this.context.logger.info(`Server is running on ${process.env.NODE_ENV} environment at https://localhost:${this.port}`);
        });
    }
}
exports.default = NeutronCore;
