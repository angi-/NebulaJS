import BaseRouter from "./BaseRouter.class";
import DatabaseResource from "./Database/DatabaseModel.interface";
import { INeutronCoreContext } from "./NeutronCore.class";

export default class BaseService extends BaseRouter {
    protected path: string;

    constructor (path: string, context: INeutronCoreContext) {
        super(context);
        this.path = path;

        // this.get('')
        // TODO
    }    
}
