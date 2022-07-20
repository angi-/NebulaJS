import express, { Express, RequestHandler } from 'express';
import BaseRouter from './BaseRouter.class';
import DatabaseDriver from './Database/DatabaseDriver.class';
import FallbackRouter from './FallbackRouter';

export interface NeutronCoreConfig {
    routesPrefix?: string;
    databaseDriver?: DatabaseDriver;
}

export default class NeutronCore {
    protected app: Express;
    private port: number;
    public config?: NeutronCoreConfig;

    constructor (port: number, config?: NeutronCoreConfig) {
        this.port = port;
        this.config = config;

        this.app = express();
        this.use(express.json());
    }

    use (handler: RequestHandler) {
        this.app.use(handler);
    }

    addRouter(router: BaseRouter) {
        const prefix = this.config?.routesPrefix ? `/${this.config.routesPrefix}` : '';
        this.app.use(prefix, router.getExpressRouter());
    }

    start () {
        this.addRouter(new FallbackRouter());

        this.app.listen(this.port, () => {
            console.log(`⚡️ [server]: NebulaJS server is running at https://localhost:${this.port}`);
        });
    }
}
