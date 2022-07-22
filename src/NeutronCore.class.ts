import express, { Express, RequestHandler } from 'express';
import cors from 'cors';
import BaseRouter from './BaseRouter.class';
import IDatabaseDriver from './Database/DatabaseDriver.interface';
import FallbackRouter from './FallbackRouter';
import ILogger from './Logger/Logger.interface';
import DefaultLogger from './Logger/DefaultLogger.class';

export interface INeutronCoreConfig {
    routesPrefix?: string;
    corsOrigin?: string;
    corsSuccessStatus?: number;
    databaseDriver?: IDatabaseDriver;
    loggerDriver?: ILogger
}

export interface INeutronCoreContext {
    database?: IDatabaseDriver | null,
    logger: ILogger
}

export default class NeutronCore {
    protected app: Express;
    private port: number;
    private config?: INeutronCoreConfig;
    private context: INeutronCoreContext;

    constructor (port: number, config?: INeutronCoreConfig) {
        this.port = port;
        this.config = config;

        this.context = {
            database: this.config?.databaseDriver || null,
            logger: this.config?.loggerDriver || new DefaultLogger()
        };

        this.app = express();
        this.use(express.json());
        this.use(cors({
            origin: this.config?.corsOrigin || '*',
            optionsSuccessStatus: this.config?.corsSuccessStatus || 200
        }));
    }

    use (handler: RequestHandler) {
        this.app.use(handler);
    }

    addRouter (router: BaseRouter) {
        const prefix = this.config?.routesPrefix ? `/${this.config.routesPrefix}` : '';
        this.app.use(prefix, router.getExpressRouter());
    }

    getContext () {
        return this.context;
    }

    start () {
        this.addRouter(new FallbackRouter(this.getContext()));

        this.app.listen(this.port, () => {
            this.context.logger.info(`Server is running on ${process.env.NODE_ENV} environment at https://localhost:${this.port}`);
        });
    }
}
