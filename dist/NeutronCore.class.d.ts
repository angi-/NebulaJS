import { Express, RequestHandler } from 'express';
import BaseRouter from './BaseRouter.class';
import IDatabaseDriver from './Database/DatabaseDriver.interface';
import ILogger from './Logger/Logger.interface';
export interface INeutronCoreConfig {
    routesPrefix?: string;
    corsOrigin?: string;
    corsSuccessStatus?: number;
    databaseDriver?: IDatabaseDriver;
    loggerDriver?: ILogger;
}
export interface INeutronCoreContext {
    database?: IDatabaseDriver | null;
    logger: ILogger;
}
export default class NeutronCore {
    protected app: Express;
    private port;
    private config?;
    private context;
    constructor(port: number, config?: INeutronCoreConfig);
    use(handler: RequestHandler): void;
    addRouter(router: BaseRouter): void;
    getContext(): INeutronCoreContext;
    start(): void;
}
