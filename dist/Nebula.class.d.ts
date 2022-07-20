import { Express, RequestHandler } from 'express';
import BaseRouter from './BaseRouter.class';
import DatabaseDriver from './Database/DatabaseDriver.class';
export interface NebulaConfig {
    routesPrefix?: string;
    databaseDriver?: DatabaseDriver;
}
export default class Nebula {
    protected app: Express;
    private port;
    config?: NebulaConfig;
    constructor(port: number, config?: NebulaConfig);
    use(handler: RequestHandler): void;
    addRouter(router: BaseRouter): void;
    start(): void;
}
