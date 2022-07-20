"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nebula_class_1 = __importDefault(require("./Nebula.class"));
const app = new Nebula_class_1.default(4323, { routesPrefix: 'v1' });
app.start();
