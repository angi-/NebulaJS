import NotImplementedException from "../Exceptions/NotImplementedException";
import DatabaseResource from "./DatabaseResource.class";

export default class DatabaseDriver {
    constructor () {

    }

    getResource(name: string): DatabaseResource {
        throw new NotImplementedException();
    }
}
