import BaseRouter from "./BaseRouter.class";
import { INeutronCoreContext } from "./NeutronCore.class";
export default class BaseService extends BaseRouter {
    protected path: string;
    constructor(path: string, context: INeutronCoreContext);
}
