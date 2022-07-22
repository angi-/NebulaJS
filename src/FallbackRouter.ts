import { Request, Response } from 'express'
import BaseRouter from "./BaseRouter.class";
import { INeutronCoreContext } from './NeutronCore.class';

export default class FallbackRouter extends BaseRouter {
    constructor (context: INeutronCoreContext) {
        super(context);

        this.all('*', (req: Request, res: Response) => res.status(404).send({
            message: 'This resource does not exist'
        }));
    }
}
