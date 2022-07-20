import DatabaseResource from "./DatabaseResource.class";
export default class DatabaseDriver {
    constructor();
    getResource(name: string): DatabaseResource;
}
