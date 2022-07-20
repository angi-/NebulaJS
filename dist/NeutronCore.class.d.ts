import { Express, RequestHandler } from 'express';
import BaseRouter from './BaseRouter.class';
import DatabaseDriver from './Database/DatabaseDriver.class';
export interface NeutronCoreConfig {
    routesPrefix?: string;
    databaseDriver?: DatabaseDriver;
}
export default class NeutronCore {
    protected app: Express;
    private port;
    config?: NeutronCoreConfig;
    constructor(port: number, config?: NeutronCoreConfig);
    use(handler: RequestHandler): void;
    addRouter(router: BaseRouter): void;
    start(): void;
}
