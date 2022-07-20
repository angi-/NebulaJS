"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NeutronCore_class_1 = __importDefault(require("./NeutronCore.class"));
const app = new NeutronCore_class_1.default(4323, { routesPrefix: 'v1' });
app.start();
