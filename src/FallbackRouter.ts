import { Request, Response } from 'express'
import BaseRouter from "./BaseRouter.class";

export default class FallbackRouter extends BaseRouter {
    constructor () {
        super();

        this.all('*', (req: Request, res: Response) => res.status(404).send({
            message: 'This resource does not exist'
        }));
    }
}
