import BaseRouter from "./BaseRouter.class";
import DatabaseResource from "./Database/DatabaseResource.class";

export default class BaseService extends BaseRouter {
    protected path: string;
    protected resource: DatabaseResource;

    constructor (path: string, resource: DatabaseResource) {
        super();
        this.path = path;
        this.resource = resource;

        // this.get('')
        // TODO
    }    
}
